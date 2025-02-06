import NavigatePage from "@/components/navigatePage";
import ArticleHeading from "../article/articleHeading";
import ArticleTitle from "../article/articleTitle";
import ArticleMeta from "../articleMeta/articleMeta";
import MediaDisplay from "../mediaDisplay/mediaDisplay.index";

const ArticleCard = ({
  title,
  description,
  imgSrc,
  category,
  link = "",
  createdAt = new Date(),
  mediaType = "image",
}) => {
  return (
    <div className="flex-shrink max-w-full sm:w-full md:w-1/2 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
      <NavigatePage url={link}>
        <div className="flex flex-row sm:block hover-img">
          <div className="block md:hidden">
            <MediaDisplay
              source={imgSrc}
              altText={title}
              mediaType={mediaType}
              className="max-w-1/4 w-full mx-auto aspect-video"
            />
          </div>
          <div className="hidden md:block">
            <MediaDisplay
              source={imgSrc}
              altText={title}
              mediaType={mediaType}
              className="max-w-full w-full mx-auto aspect-video"
            />
          </div>
          <div className="py-0 w-full md:w-full sm:py-3 pl-3 sm:pl-0">
            <div className="flex flex-col gap-3">
              <ArticleHeading
                heading={title}
                className="text-lg font-bold line-clamp-2"
              />
              <ArticleTitle title={description} className="line-clamp-3" />
              <ArticleMeta date={createdAt} category={category} />
            </div>
          </div>
        </div>
      </NavigatePage>
    </div>
  );
};

export default ArticleCard;
