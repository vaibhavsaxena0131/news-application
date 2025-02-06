import ArticleMeta from "@/components/articleMeta/articleMeta";
import ArticleHeading from "@/components/article/articleHeading";
import ArticleTitle from "@/components/article/articleTitle";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAfrikaRegionMainArticlesAction } from "@/globalStates/actions/articleAction";
import CustomLoader from "@/layouts/skeletonLoaders";
import NavigatePage from "@/components/navigatePage";
import paths from "@/routes/paths";
import MediaDisplay from "@/components/mediaDisplay/mediaDisplay.index";

const RegionBasedPageHeroSection = () => {
  const { subCategory } = useParams();
  const dispatch = useDispatch();
  const { afrikaRegionMainArticles } = useSelector((state) => state?.articles);
  const { isLoading } = useSelector((state) => state?.loader);

  const [mainArticle, setMainArticle] = useState(null);
  const [listArticles, setListArticles] = useState([]);

  useEffect(() => {
    if (subCategory) {
      dispatch(
        fetchAfrikaRegionMainArticlesAction({
          category_code: subCategory,
        })
      );
    }
  }, [subCategory, dispatch]);

  useEffect(() => {
    if (afrikaRegionMainArticles?.latest_article) {
      setMainArticle(afrikaRegionMainArticles.latest_article[0]);
      setListArticles(afrikaRegionMainArticles.latest_article.slice(1, 5));
    }
  }, [afrikaRegionMainArticles]);

  if (isLoading) {
    return <CustomLoader name="MainSkeletonLoader" />;
  }

  if (!mainArticle) {
    return (
      <div className="text-center mt-12">
        No articles available for the selected category.
      </div>
    );
  }

  return (
    <section className="container max-w-7xl mx-auto !mt-12 pb-10">
      <div className="flex flex-col md:flex-row items-stretch gap-3">
        {/* Main Article */}
        <div className="flex-1">
          <NavigatePage url={paths.VIEW_BLOG(mainArticle.id)}>
            <article className="flex flex-col h-full">
              <MediaDisplay
                mediaType={mainArticle?.media?.type}
                source={mainArticle?.media?.url}
                altText={mainArticle.title}
                className="w-full aspect-video rounded-md"
              />
              <div className="flex flex-col gap-4 h-full">
                <ArticleHeading
                  heading={mainArticle?.title || "No title available"}
                  className="text-4xl font-extrabold"
                />
                <ArticleTitle
                  title={mainArticle?.description || "No description available"}
                  className="line-clamp-2"
                />
              </div>
            </article>
          </NavigatePage>
        </div>

        {/* List Articles */}
        <div className="flex-1">
          <div className="flex flex-col gap-2 h-full">
            {listArticles.length > 0 ? (
              listArticles.map((article, index) => (
                <div
                  key={index}
                  className={`px-3 flex flex-col gap-2 py-2 flex-grow ${
                    listArticles.length === index + 1
                      ? ""
                      : "border-b-2 border-gray-500"
                  } pb-3`}
                >
                  <NavigatePage url={paths.VIEW_BLOG(article.id)}>
                    <ArticleHeading
                      heading={article.title || "No title available"}
                      className="font-bold text-xl"
                    />
                    <ArticleTitle
                      title={article.description || "No description available"}
                      className="line-clamp-1"
                    />
                    {article.createdAt && (
                      <ArticleMeta date={article.createdAt} />
                    )}
                  </NavigatePage>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">
                No additional articles found.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionBasedPageHeroSection;
