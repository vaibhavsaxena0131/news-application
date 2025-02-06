import LatestNewsSection from "@/components/latestNewsSection/latestNewsSection";
import PopularArticlesList from "@/components/lists/popularArticleList";

const LetestNews = ({ articles = [], mostPopularPost = [] }) => {
  return (
    <section className="!relative">
      <LatestNewsSection
        sectionTitle="Labaran Yanzu"
        articles={articles}
        reverseLayout={true}
        hasRightContent
        veiwAllURL={``}
        articlesWithImage={false}
      >
        <PopularArticlesList articles={mostPopularPost} />
      </LatestNewsSection>
    </section>
  );
};

export default LetestNews;
