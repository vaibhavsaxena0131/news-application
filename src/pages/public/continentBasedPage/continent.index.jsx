import { useParams } from "react-router-dom";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import { useCallback, useEffect, useState } from "react";
import ContinentHeroSection from "./continent.herosection";
import { useDispatch, useSelector } from "react-redux";
import CustomLoader from "@/layouts/skeletonLoaders";
import { fetchAllBlog } from "@/globalStates/actions/blogActions";

const ContinentPage = ({ categories }) => {
  const { subCategory } = useParams();
  const dispatch = useDispatch();
  const { rows, count } = useSelector((state) => state.blog.allBlogs);
  const { isLoading } = useSelector((state) => state?.loader);

  const [isActiveTab, setIsActiveTab] = useState(() => categories[0] || null);
  const [currentPage, setCurrentPage] = useState(1);
  let title = {
    turai: "Turai",
    amurka: "Amurka | Kudancin Amurka | Caribbean",
    asiya: "Asiya",
    gabas_ta_tsakiya: "Gabas-ta-tsakiya",
  };

  useEffect(() => {
    if (categories.length > 0) {
      setIsActiveTab(categories[0]);
    }
  }, [categories]);

  useEffect(() => {
    if (isActiveTab?.id) {
      dispatch(
        fetchAllBlog({
          pagination: {
            page: currentPage,
            limit: 13,
          },
          filters: {
            category_id: isActiveTab?.id,
          },
        })
      );
    }
  }, [dispatch, isActiveTab?.id, currentPage]);

  const handleTabChange = useCallback((e, category) => {
    setIsActiveTab(category);
  }, []);

  return (
    <div>
      <SectionNavigation
        title={title[subCategory]}
        showCategory
        categories={categories}
        as="tab"
        isActive={isActiveTab?.name}
        onChangeTab={handleTabChange}
      />
      {isLoading ? (
        <CustomLoader name="BlogEditorViewLoader" />
      ) : rows?.length > 0 ? (
        <ContinentHeroSection
          articles={rows?.slice(1)}
          mainArticle={rows?.[0]}
          currentTab={isActiveTab?.name}
          count={count}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ContinentPage;
