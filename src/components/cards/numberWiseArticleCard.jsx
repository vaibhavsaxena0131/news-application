import NavigatePage from "@/components/navigatePage";
import ArticleHeading from "../article/articleHeading";
import ArticleTitle from "../article/articleTitle";
import ArticleMeta from "../articleMeta/articleMeta";

const NumberWiseArticleCard = ({
  title,
  description,
  number = 1,
  category,
  link = "",
  createdAt = new Date(),
}) => {
  return (
    <div className="flex-shrink max-w-full sm:w-full md:w-1/2 lg:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
      <NavigatePage url={link}>
        <div className="flex items-center gap-3">
          <div>
            <p className="text-[#6C757D] text-4xl">{number}</p>
          </div>
          <div>
            <div className="py-0 md:w-full sm:py-3 pl-3 sm:pl-0">
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
        </div>
      </NavigatePage>
    </div>
  );
};

export default NumberWiseArticleCard;
