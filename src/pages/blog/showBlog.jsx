import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./blog.style.css";
import { useParams } from "react-router-dom";
import { fetchSingleBlog, clearBlog } from "@/globalStates/actions/blogActions";
import CustomLoader from "@/layouts/skeletonLoaders";
import NoDataFoundMessage from "@/constants/NoDataFoundMessage";
import RenderContent from "@/components/renderContent/renderContent.index";
import MediaDisplay from "@/components/mediaDisplay/mediaDisplay.index";

function ViewBlog() {
  const dispatch = useDispatch();
  const { id } = useParams(); // Assuming you have the id in the URL
  const { blogDetails, error } = useSelector((state) => state.blog);

  let {
    title = "Sample Blog Title",
    description = "This is a sample blog description.",
    media,
    content = {},
  } = blogDetails;

  const isLoading = useSelector((state) => state?.loader?.isLoading);

  const fetchBlogById = async () => {
    if (id) {
      await dispatch(fetchSingleBlog(id));
    }
  };

  useEffect(() => {
    if (id) fetchBlogById();
    return () => dispatch(clearBlog()); // Clear form data on unmount
    // eslint-disable-next-line
  }, [id, dispatch]);

  if (isLoading) {
    return <CustomLoader name="BlogEditorViewLoader" />;
  }

  if (error) {
    return <NoDataFoundMessage message="Something went wrong!" />;
  }

  return (
    <>
      {/* Blog Section */}
      <section className="container max-w-5xl mx-auto mt-0 md:mt-10 p-6 bg-white shadow-lg rounded-lg blog-container">
        {/* Blog Title */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          {title}
        </h1>
        {/* Blog Description */}
        <p className="text-lg text-gray-700 mb-8">{description}</p>
        {/* Media Preview */}
        {media && (
          <div className="mb-8">
            <MediaDisplay
              mediaType={media.type}
              source={media?.url}
              altText="Blog media"
              className="w-full h-auto rounded-lg aspect-video object-cover"
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="my-10 mx-7">
          <RenderContent content={content} />
        </div>
      </section>
    </>
  );
}

export default ViewBlog;
