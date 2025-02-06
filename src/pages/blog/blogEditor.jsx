import React, { useEffect, useId, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import InputField from "@/components/formFields/input";
import InitiEditorjs from "@/constants/editorjs/initializeEditorjs";
import CustomLoader from "@/layouts/skeletonLoaders";
import { useDispatch, useSelector } from "react-redux";
import {
  setBlog,
  createNewBlog,
  updateExistingBlog,
  fetchSingleBlog,
  clearBlog,
} from "@/globalStates/actions/blogActions";
import AutocompleteField from "@/components/formFields/autocomplete";
import TextAreaField from "@/components/formFields/textarea";
import { fetchLocationCategory } from "@/globalStates/actions/cateGoryAction";
import { FETCH_SINGLE_BLOG } from "@/globalStates/actions/actionsType";
import RadioFields from "@/components/formFields/radio";
import { UploadFiles } from "@/globalStates/actions/filesUploadAction";
import { SpinLoader } from "@/components/loader";
import MediaDisplay from "@/components/mediaDisplay/mediaDisplay.index";

function BlogEditor() {
  const { id } = useParams();
  const rendomID = useId();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const formData = new FormData();
  const blogData = useSelector((state) => state.blog.blogDetails);
  const isError = useSelector(
    (state) => state.blog?.error?.response?.data?.error
  );

  const { loadingArray } = useSelector((state) => state?.loader);
  let isLoading = loadingArray?.filter(
    (loader) => loader.type === FETCH_SINGLE_BLOG
  ).length;

  // Local State
  const [locationCategory, setLocationCategory] = useState([]);
  const [subLocationCategoryList, setSubLocationCategoryList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [changePageLoader, setChangePageLoader] = useState(false);
  const [isCoverImageUploading, setCoverImageUploading] = useState(false);

  useEffect(() => {
    if (location.key) {
      setChangePageLoader(true);
      setTimeout(() => {
        setChangePageLoader(false);
      }, 500);
    }
  }, [location.key]);

  // Fetch Categories (Countries, States, etc.)
  const fetchCategory = async (id) => {
    let category = await dispatch(fetchLocationCategory(id));
    if (category?.status === 200 && category?.data?.success) {
      return category?.data?.data;
    } else {
      return [];
    }
  };

  // Fetch blog data if `id` exists
  const fetchBlogById = async () => {
    if (id) {
      await dispatch(fetchSingleBlog(id));
    }
  };

  // Handle form data conversion for file uploads
  function appendFormData(formData, data, parentKey = "") {
    if (data && typeof data === "object" && !Array.isArray(data)) {
      Object.keys(data).forEach((key) => {
        appendFormData(
          formData,
          data[key],
          parentKey ? `${parentKey}[${key}]` : key
        );
      });
    } else if (Array.isArray(data)) {
      data.forEach((value, index) => {
        appendFormData(formData, value, `${parentKey}[${index}]`);
      });
    } else {
      formData.append(parentKey, data);
    }
  }

  // Load categories when component mounts
  useEffect(() => {
    fetchCategory(0).then((result) => {
      const filteredCategories = result.filter(
        (cate) =>
          !["home", "kasuwanci", "wasanni", "yanayi_a_yau"].includes(
            cate.category_code
          )
      );
      setLocationCategory(filteredCategories);
    });
    // eslint-disable-next-line
  }, []);

  // Clear form data and fetch blog data when switching between create/edit mode
  useEffect(() => {
    if (id) {
      fetchBlogById();
    } else {
      dispatch(clearBlog()); // Clear the form when it's in create mode
    }
    return () => dispatch(clearBlog()); // Clear on unmount
    // eslint-disable-next-line
  }, [id, dispatch]);

  const fetchSubLocationCategoryList = async (id) => {
    let subCategory = id ? await fetchCategory(id) : [];
    setSubLocationCategoryList(subCategory);
  };

  const fetchCategoryList = async (id) => {
    let category = id ? await fetchCategory(id) : [];
    setCategoryList(category);
  };

  useEffect(() => {
    let id = blogData?.parentMaincategory?.id ?? "";
    if (id) {
      fetchSubLocationCategoryList(id);
    }
    // eslint-disable-next-line
  }, [blogData?.parentMaincategory?.id]);

  useEffect(() => {
    let id = blogData?.parentSubcategory?.id ?? "";
    if (id) {
      fetchCategoryList(id);
    }
    // eslint-disable-next-line
  }, [blogData?.parentSubcategory?.id]);

  // Handle posting or updating the blog
  async function handlePostOrUpdateBlog(e) {
    e.preventDefault();
    let updateKeys = {
      ...blogData,
      category_id: blogData?.category?.id || null,
      parent_main_category_id: blogData?.parentMaincategory?.id || null,
      parent_sub_category_id: blogData?.parentSubcategory?.id || null,
    };
    await appendFormData(formData, updateKeys);

    if (isError) return;

    if (id) {
      // Update an existing blog
      await dispatch(updateExistingBlog(id, formData));
      navigate("/");
    } else {
      // Create a new blog
      await dispatch(createNewBlog(updateKeys));
      navigate("/");
    }
  }

  // Handle form input changes and file uploads
  const handleSetBlog = async (e) => {
    let { name, value, type, files } = e.target;
    if (type === "file") {
      let file = files[0];
      const fileType = file.type.startsWith("video/") ? "video" : "image";
      let formData = new FormData();
      formData.append("file", file);
      setCoverImageUploading(true);

      const URI = await dispatch(UploadFiles(formData));
      if (URI?.data?.success) {
        dispatch(
          setBlog({
            media: {
              type: fileType,
              ...URI?.data?.data,
            },
          })
        );
      }

      setCoverImageUploading(false);
    } else {
      dispatch(setBlog({ [name]: value }));
    }

    // Adjust the height of textarea dynamically
    if (type === "textarea") {
      const textarea = e.target;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight + 5}px`;
    }
  };

  if (isLoading || changePageLoader) {
    return <CustomLoader name="BlogEditorFormLoader" />;
  }

  return (
    <section
      className="container max-w-5xl mx-auto md:mt-5 pb-10 px-4"
      key={`section-${rendomID}`}
    >
      <SectionNavigation
        title={id ? "Edit Blog" : "Create Blog"}
        titlePosition="!text-left !mb-0"
        titleClassname="!text-2xl"
      />

      <div className="pt-0 bg-white p-6 rounded-lg shadow-lg">
        <form
          key={`form-${rendomID}`}
          onChange={handleSetBlog}
          onSubmit={handlePostOrUpdateBlog}
          className={`space-y-6 ${isError ? "pointer-events-none" : ""}`}
        >
          <div>
            <RadioFields
              label="Blog type"
              name="blog_type"
              defaultValue={blogData?.blog_type}
              radioContainerClass={"flex gap-4"}
              options={[
                { value: "news", label: "News" },
                { value: "informational", label: "Informational" },
              ]}
            />
          </div>
          {/* Title */}
          {/* {blogData?.blog_type === 'news' && */}
          <>
            <div>
              <label htmlFor="title" className="text-[#17181C] font-bold ">
                Title
              </label>
              <InputField
                key={`input-${rendomID}`}
                type="text"
                name="title"
                placeholder="Write your blog title"
                className="w-full mt-1"
                defaultValue={blogData?.title}
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="text-[#17181C] font-bold">
                Description
              </label>
              <TextAreaField
                name="description"
                placeholder="Write your blog description"
                className="w-full mt-1"
                defaultValue={blogData?.description}
              />
            </div>
          </>
          {/* } */}

          {/* Author Name */}
          <div>
            <label htmlFor="author" className="text-[#17181C] font-bold">
              Author Name
            </label>
            <InputField
              type="text"
              name="author"
              placeholder="Write your author name"
              className="w-full mt-1"
              defaultValue={blogData?.author}
            />
          </div>

          {/* Country Autocomplete */}
          <div>
            <AutocompleteField
              label="Main category"
              name="parentMaincategory"
              options={locationCategory}
              title="name"
              value="name"
              defaultOption={true}
              defaultOptionLabel="Select country"
              showCheck={false}
              selected={blogData?.parentMaincategory}
              onSelect={async (value) => {
                handleSetBlog({
                  target: {
                    value,
                    name: "parentMaincategory",
                    type: "select",
                  },
                });
                setCategoryList([]);
                handleSetBlog({
                  target: {
                    value: "",
                    name: "parentSubcategory",
                    type: "select",
                  },
                });
              }}
            />
          </div>

          {/* State Autocomplete */}
          {subLocationCategoryList.length > 0 && (
            <div>
              <AutocompleteField
                label="Sub location category"
                name="parentSubcategory"
                options={subLocationCategoryList}
                title="name"
                value="name"
                defaultOption={true}
                defaultOptionLabel="Select State"
                showCheck={false}
                selected={blogData?.parentSubcategory}
                onSelect={async (value) => {
                  handleSetBlog({
                    target: { value, name: "parentSubcategory" },
                  });
                  handleSetBlog({ target: { value: "", name: "category" } });
                }}
              />
            </div>
          )}

          {/* Category */}
          {categoryList.length > 0 && (
            <div>
              <AutocompleteField
                label="Category"
                name="category"
                title="name"
                value="name"
                options={categoryList}
                selected={blogData?.category}
                onSelect={(value) =>
                  handleSetBlog({ target: { value, name: "category" } })
                }
                placeholder="Select blog category"
                className="w-full mt-1"
              />
            </div>
          )}

          {/* Media Upload */}
          <div>
            <label
              htmlFor="media"
              className="block text-sm font-medium text-gray-700 cursor-pointer"
            >
              Media
              <div className="bg-slate-500 aspect-video flex justify-center items-center text-4xl text-white mt-2 rounded-lg overflow-hidden">
                {isCoverImageUploading ? (
                  <div className="flex gap-3">
                    <SpinLoader isLoading />
                    <span>Uploding...</span>
                  </div>
                ) : !blogData.media ? (
                  <div>Select cover Image or Video</div>
                ) : (
                  <MediaDisplay
                    mediaType={blogData.media.type}
                    source={blogData.media.url}
                    altText="blog cover image"
                    className="aspect-video object-cover"
                  />
                )}
              </div>
            </label>

            <input
              className="hidden"
              id="media"
              name="media"
              type="file"
              accept=".png, .jpeg, .jpg, .mp4, .mov"
            />
          </div>

          {/* EditorJS */}
          <div>
            <InitiEditorjs />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {id ? "Update blog" : "Post blog"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default BlogEditor;
