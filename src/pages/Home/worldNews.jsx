import paths from "@/routes/paths";
import NewsBlock from "./newsBlock";
import PopularArticlesList from "@/components/lists/popularArticleList";

const WorldNews = ({ articles = [], mostPopularPost = [] }) => {
  return (
    <section className="!relative">
      <NewsBlock
        sectionTitle="Duniya"
        articles={articles}
        reverseLayout={false}
        hasRightContent
        veiwAllURL={`${paths.CATEGORY_NEWS("duniya")}`}
        articlesWithImage={false}
      >
        <PopularArticlesList articles={mostPopularPost} />
      </NewsBlock>
    </section>
  );
};

export default WorldNews;
