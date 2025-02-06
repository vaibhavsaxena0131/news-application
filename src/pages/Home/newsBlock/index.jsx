import ArticleCard from "@/components/cards/articleCard";
import SectionHeading from "@/components/sectionHeading";
import RightContent from "../rightContent";
import ArticleCoverCard from "@/components/cards/articleCoverCard";
import NumberWiseArticleCard from "@/components/cards/numberWiseArticleCard";
import paths from "@/routes/paths";

const NewsBlock = ({
  sectionTitle,
  articles,
  reverseLayout,
  hasRightContent = false,
  children,
  coverDetails = { show: false },
  veiwAllURL = "/",
  articlesWithImage = true,
}) => {
  return (
    <section className="container mx-auto px-4">
      <hr className="w-full h-0.5 my-8 bg-black border-0 rounded dark:bg-gray-700" />
      <div className="bg-white">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <SectionHeading title={sectionTitle} url={veiwAllURL} />

          <ContentLayout
            leftContent={
              <>
                {coverDetails?.show && (
                  <ArticleCoverCard
                    article={coverDetails}
                    height="max-h-[30.05rem]"
                    titleClassName="text-3xl font-bold"
                    padding="p-4"
                    showDescription={true}
                    className="mb-4"
                  />
                )}

                <div className="flex flex-row flex-wrap -mx-3">
                  {articles.map((article, index) =>
                    articlesWithImage ? (
                      <ArticleCard
                        key={index}
                        title={article.title}
                        description={article.description}
                        imgSrc={article.imgSrc}
                        mediaType={article?.media?.type}
                        category={article.category}
                        link={paths.VIEW_BLOG(article?.id)}
                        createdAt={article?.createdAt}
                      />
                    ) : (
                      <NumberWiseArticleCard
                        key={index}
                        title={article.title}
                        description={article.description}
                        imgSrc={article.imgSrc}
                        category={article.category}
                        link={paths.VIEW_BLOG(article?.id)}
                        number={index + 1}
                        createdAt={article?.createdAt}
                      />
                    )
                  )}
                </div>
              </>
            }
            hasRightContent={hasRightContent}
            rightContent={<RightContent>{children}</RightContent>}
            reverse={reverseLayout} // Set true for right side first
          />
        </div>
      </div>
    </section>
  );
};

export default NewsBlock;

const ContentLayout = ({
  leftContent,
  rightContent,
  reverse,
  hasRightContent = false,
}) => {
  return (
    <div className="flex flex-row flex-wrap">
      {/* Left Content */}
      <div
        className={`flex-shrink max-w-full gap-2 w-full  ${hasRightContent ? "lg:w-2/3" : ""} overflow-hidden ${reverse ? "order-first lg:order-last" : ""}`}
      >
        {leftContent}
      </div>

      {/* Right Content */}
      {hasRightContent && (
        <div
          className={`flex-shrink max-w-full w-full lg:w-1/3 ${reverse ? "lg:pe-8" : "lg:pl-8"} ${reverse ? "order-last lg:order-first" : ""}`}
        >
          {rightContent}
        </div>
      )}
    </div>
  );
};
