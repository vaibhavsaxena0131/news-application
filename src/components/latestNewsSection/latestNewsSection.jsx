import SectionHeading from "@/components/sectionHeading";
import NumberWiseArticleCard from "@/components/cards/numberWiseArticleCard";
import paths from "@/routes/paths";

const LatestNewsSection = ({
  sectionTitle,
  articles = [],
  reverseLayout,
  hasRightContent = false,
  children,
  veiwAllURL = "/",
}) => {
  return (
    <section className="container mx-auto px-4">
      <hr className="w-full h-0.5 my-8 bg-black border-0 rounded dark:bg-gray-700" />
      <div className="bg-white">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <SectionHeading title={sectionTitle} url={veiwAllURL} />
          <ContentLayout
            leftContent={
              <div className="flex flex-row flex-wrap -mx-3">
                {articles?.map((article, index) => (
                  <NumberWiseArticleCard
                    key={index}
                    title={article.title}
                    description={article.description}
                    imgSrc={article.imgSrc}
                    category={article.category}
                    link={paths.VIEW_BLOG(article?.id)}
                    number={index + 1}
                  />
                ))}
              </div>
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

export default LatestNewsSection;

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

const RightContent = ({ children }) => {
  return (
    <div className="w-full bg-gray-50 h-full relative">
      <div className=""></div>
      <div className="text-sm sticky top-0">{children}</div>
    </div>
  );
};
