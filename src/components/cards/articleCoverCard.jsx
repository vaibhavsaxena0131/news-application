import ImageElement from "@/components/ImageElement";
import NavigatePage from "@/components/navigatePage";
import ArticleMeta from "../articleMeta/articleMeta";
import ArticleHeading from "../article/articleHeading";
import ArticleTitle from "../article/articleTitle";

const ArticleCoverCard = ({
  article,
  className = "",
  titleClassName = "text-lg font-bold",
  height = "max-h-60",
  padding = "p-2",
  showDescription = false,
}) => {
  return (
    <div
      className={`relative hover-img overflow-hidden ${height} ${className}`}
    >
      <NavigatePage url={article?.link}>
        <ImageElement
          className="w-full aspect-video"
          src={article.imgSrc}
          alt={article.title}
        />
        <div
          className={`absolute bottom-0 bg-black bg-opacity-50 w-full ${padding}`}
        >
          <ArticleMeta
            timerClassName="!text-gray-200"
            categoryClassName="!text-[#f79e4d]"
            dividerClass="!text-gray-200"
            date={new Date("10-14-2024 18:14")}
            category={article.category}
          />
          <ArticleHeading
            heading={article.title}
            className={`text-white mb-1 line-clamp-2 ${titleClassName}`}
          />
          {showDescription && (
            <ArticleTitle
              title={article.description}
              className="line-clamp-1 !text-gray-200"
            />
          )}
        </div>
      </NavigatePage>
    </div>
  );
};

export default ArticleCoverCard;
