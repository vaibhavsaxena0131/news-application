import ArticleMeta from "@/components/articleMeta/articleMeta";
import ArticleHeading from "@/components/article/articleHeading";
import ArticleTitle from "@/components/article/articleTitle";
import NavigatePage from "@/components/navigatePage";
import paths from "@/routes/paths";
import MediaDisplay from "@/components/mediaDisplay/mediaDisplay.index";

const WasanniHeroSection = ({ articles = {} }) => {
  let { mainArticle = {}, sideArticles = [], listArticles = [] } = articles;

  return (
    <section className="container mx-auto  md:mt-5 pb-10">
      <div className="flex flex-col md:flex-row items-stretch gap-3">
        {/* Main Article */}
        <div className="w-full lg:w-2/4">
          <NavigatePage url={paths.VIEW_BLOG(mainArticle.id)}>
            <article className="flex flex-col h-full">
              <div>
                <MediaDisplay
                  source={mainArticle.image}
                  mediaType={mainArticle?.mediaType}
                  altText={mainArticle.title}
                  className="w-full aspect-video rounded-md"
                />
              </div>
              <div className="flex flex-col gap-4 h-full">
                <ArticleHeading
                  heading={mainArticle.title}
                  className="text-4xl font-extrabold"
                />
                <ArticleTitle
                  title={mainArticle.description}
                  className="line-clamp-2"
                />
              </div>
            </article>
          </NavigatePage>
        </div>

        {/* Side Articles */}
        <div className="w-full md:w-1/4">
          <div className="flex flex-col gap-2 h-full">
            {sideArticles.map((article, index) => (
              <div key={index} className="flex flex-col gap-2 flex-grow">
                <NavigatePage url={paths.VIEW_BLOG(article.id)}>
                  <div>
                    <MediaDisplay
                      source={article.image}
                      mediaType={article?.mediaType}
                      altText={article.title}
                      className="w-full aspect-video rounded-md"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <ArticleHeading
                      heading={article.title}
                      className="text-xl font-bold"
                    />
                    <ArticleMeta
                      date={article.date}
                      category={article.category}
                    />
                  </div>
                </NavigatePage>
              </div>
            ))}
          </div>
        </div>

        {/* List Articles */}
        <div className="w-full md:w-1/4">
          <div className="flex flex-col gap-2 h-full">
            {listArticles.map((article, index) => (
              <div
                key={index}
                className={`px-3 flex flex-col gap-2 py-2 flex-grow ${listArticles.length === index + 1 ? "" : "border-b-2 border-gray-500"} pb-3`}
              >
                <NavigatePage url={paths.VIEW_BLOG(article.id)}>
                  <ArticleHeading
                    heading={article.title}
                    className="font-bold text-xl"
                  />
                  <ArticleTitle
                    title={article.description}
                    className="line-clamp-1"
                  />
                  <ArticleMeta date={article.date} />
                </NavigatePage>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasanniHeroSection;
