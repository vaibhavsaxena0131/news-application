import NewsFeeds from "@/pages/newsFeeds/newsFeeds";
import { useDispatch, useSelector } from "react-redux";
import { WasanniPageNewsFeedsArticles } from "@/globalStates/actions/articleAction";
import { memo, useCallback, useEffect, useMemo, useState } from "react";

const WasanniNewsFeeds = () => {
  const dispatch = useDispatch();
  const { wasanniFeeds } = useSelector((state) => state?.articles);
  const isLoading = useSelector((state) => state.loader?.isLoading);

  // Local state for pagination
  const [page, setPage] = useState(1);

  // Fetch articles with memoized callback
  const fetchArticles = useCallback(
    (currentPage) => {
      dispatch(
        WasanniPageNewsFeedsArticles({
          pagination: {
            page: currentPage,
          },
        })
      );
    },
    [dispatch]
  );

  // Trigger fetchArticles when `page` changes
  useEffect(() => {
    fetchArticles(page);
  }, [page, fetchArticles]);

  // Handle "Show More" button click
  const handleShowMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  // Destructure data with default values
  const { count = 0, rows = [] } = wasanniFeeds || {};

  // Memoize articles to avoid unnecessary re-computation
  const memorizedArticles = useMemo(
    () =>
      rows.map((article) => ({
        ...article,
        category: article?.parentMaincategory?.name,
      })),
    [rows]
  );

  return (
    <div>
      <NewsFeeds
        feeds={memorizedArticles} // Pass memoized articles
        onShowMore={handleShowMore} // Callback for "Show More" button
        showButton={rows.length < count && !isLoading} // Conditional button rendering
      />
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default memo(WasanniNewsFeeds);
