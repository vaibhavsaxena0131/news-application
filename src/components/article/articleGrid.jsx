import paths from "@/routes/paths";
import ArticleMeta from "../articleMeta/articleMeta";
import NavigatePage from "../navigatePage";
import ArticleHeading from "./articleHeading";

const ArticleCategory = ({ title, articles }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold border-b-2 border-gray-400 pb-4 mb-4">
        {title}
      </h2>
      {articles.map((article, index) => (
        <NavigatePage
          url={paths.VIEW_BLOG(article?.id)}
          key={index}
          className="mb-6 flex flex-col gap-3"
        >
          <ArticleHeading
            heading={article.title}
            className="text-xl font-medium text-gray-800"
          />
          <ArticleMeta date={article?.createdAt} />
        </NavigatePage>
      ))}
    </div>
  );
};

const ArticleGrid = ({
  categories,
  className = "",
  gridClassName = "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
}) => {
  return (
    <section className="pt-10">
      <div className="container mx-auto px-4 py-6">
        <div className={`grid gap-8 ${className} ${gridClassName}`}>
          {categories.map((category, index) => (
            <ArticleCategory
              key={index}
              title={category.title}
              articles={category.articles}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleGrid;
