import NewsBlock from "./newsBlock";
import paths from "@/routes/paths";

const AfricaNews = ({ articles = [] }) => {
  return (
    <NewsBlock
      sectionTitle="Afirka"
      articles={articles}
      reverseLayout={false}
      veiwAllURL={`${paths.CATEGORY_NEWS("afrika")}`}
    />
  );
};

export default AfricaNews;
