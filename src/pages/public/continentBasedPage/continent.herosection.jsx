import NumberWiseArticleCard from "@/components/cards/numberWiseArticleCard";
import Pagination from "@/components/pagination/paginationUI";
import paths from "@/routes/paths";
import NavigatePage from "@/components/navigatePage";
import MediaDisplay from "@/components/mediaDisplay/mediaDisplay.index";

const ContinentHeroSection = ({
  articles = [],
  mainArticle = {},
  count = 1,
  currentPage = 1,
  onPageChange = () => {},
}) => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <div className="max-w-6xl w-full bg-white shadow-md rounded-lg overflow-hidden">
          <NavigatePage
            className="relative"
            url={paths.VIEW_BLOG(mainArticle?.id)}
          >
            <MediaDisplay
              mediaType={mainArticle?.media?.type}
              source={mainArticle?.media?.url}
              altText={mainArticle.title}
              className="w-full h-[32rem]  aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute bottom-4 left-4 max-w-lg w-full bg-white rounded">
              <h2 className="text-2xl  font-bold p-3">{mainArticle?.title}</h2>
            </div>
          </NavigatePage>
        </div>
        <div className="max-w-5xl w-full bg-white shadow-md rounded-lg overflow-hidden pb-4">
          <div className="flex flex-row flex-wrap -mx-3">
            {articles?.map((article, index) => (
              <NumberWiseArticleCard
                key={index}
                title={article?.title}
                description={article?.description}
                imgSrc={article?.imgSrc}
                category={article?.category?.name || "OPTIONAL"}
                link={paths.VIEW_BLOG(article?.id)}
                number={index + 1}
              />
            ))}
          </div>
          <div>
            <Pagination
              totalPages={Math.ceil(count / 13)}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinentHeroSection;
