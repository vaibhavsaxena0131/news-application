import LatestNewsSection from "@/components/latestNewsSection/latestNewsSection";
import PopularArticlesList from "@/components/lists/popularArticleList";

const AfrikaLatestNews = ({ articles = [], mostPopularPost = [] }) => {
  return (
    <LatestNewsSection
      sectionTitle="Labaran Yanzu"
      articles={articles}
      hasRightContent
      veiwAllURL=""
    >
      <PopularArticlesList articles={mostPopularPost} />
    </LatestNewsSection>
  );
};

export default AfrikaLatestNews;
