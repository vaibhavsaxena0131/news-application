import NewsFeeds from "@/pages/newsFeeds/newsFeeds";
import { useMemo } from "react";

const DuniyaNewsFeeds = ({
  articles = [],
  showButton = true,
  onShowMore = () => {},
}) => {
  let memorizedArticles = useMemo(() => {
    let update = articles.map((article) => ({
      ...article,
      category: article?.parentSubcategory?.name,
    }));
    return update;
  }, [articles]);

  return (
    <NewsFeeds
      feeds={memorizedArticles}
      showButton={showButton}
      onShowMore={onShowMore}
    />
  );
};

export default DuniyaNewsFeeds;
