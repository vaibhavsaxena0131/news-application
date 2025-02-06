import NumberWiseArticleCard from "@/components/cards/numberWiseArticleCard";
import Pagination from "@/components/pagination/paginationUI";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAfrikaRegionNewsFeedArticlesAction } from "@/globalStates/actions/articleAction";
import { useEffect, useState } from "react";

const NewsFeedRegionBased = () => {
  const { subCategory } = useParams();
  const dispatch = useDispatch();
  const { afrikaRegionNewsFeedArticles } = useSelector(
    (state) => state?.articles
  );

  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    pageLimit: 12,
  });

  useEffect(() => {
    if (subCategory) {
      fetchArticles();
    }
    // eslint-disable-next-line
  }, [subCategory, paginationData.currentPage]);

  const fetchArticles = () => {
    const payload = {
      category_code: subCategory,
      pagination: {
        page: paginationData.currentPage,
        limit: paginationData.pageLimit,
      },
    };
    dispatch(fetchAfrikaRegionNewsFeedArticlesAction(payload));
  };

  const handlePageChange = (pageNumber) => {
    setPaginationData((prev) => ({
      ...prev,
      currentPage: pageNumber,
    }));
  };

  // Destructure data for easier use
  const { count = 0, rows = [] } =
    afrikaRegionNewsFeedArticles?.allArticle || {};

  if (!rows.length) {
    return (
      <div className="text-center py-10">
        {/* <p className="text-lg">No articles found for the selected category.</p> */}
      </div>
    );
  }

  const totalPages = Math.ceil(count / paginationData.pageLimit);

  return (
    <section className="container mx-auto">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <hr className="w-full h-0.5 my-8 max-w-7xl bg-black border-0 rounded dark:bg-gray-700" />
        <div className="max-w-7xl w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-row flex-wrap -mx-3">
            {rows.map((article, index) => (
              <NumberWiseArticleCard
                key={article.id || index}
                title={article.title || "Untitled Article"}
                description={article.description || "No description available"}
                imgSrc={article.imgSrc || "/default-image.jpg"}
                category={article.category?.name || "OPTIONAL"}
                link={article.link || "#"}
                number={
                  index +
                  1 +
                  (paginationData.currentPage - 1) * paginationData.pageLimit
                }
              />
            ))}
          </div>
          <div className="mt-6">
            <Pagination
              totalPages={totalPages}
              currentPage={paginationData.currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsFeedRegionBased;
