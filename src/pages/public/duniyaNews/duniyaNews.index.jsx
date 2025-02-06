import { memo, useCallback, useEffect, useState } from "react";
import DuniyaImageSection from "./duniyaImageSection";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import DuniyaNewsFeeds from "./duniyaNewsFeeds";
import { useDispatch, useSelector } from "react-redux";
import CustomLoader from "@/layouts/skeletonLoaders";
import { DuniyaPageArticles } from "@/globalStates/actions/articleAction";

const DuniyaNews = ({ categories }) => {
  const dispatch = useDispatch();
  const { duniya } = useSelector((state) => state?.articles);
  const isLoading = useSelector((state) => state.loader?.isLoading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchArticles(page);
    // eslint-disable-next-line
  }, [page]);

  const fetchArticles = (currentPage) => {
    dispatch(
      DuniyaPageArticles({
        pagination: {
          page: currentPage,
        },
      })
    );
  };

  const handleShowMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  if (isLoading) {
    return <CustomLoader name="NewsSkeletonLoader"></CustomLoader>;
  }
  const { count = 0, rows = [] } = duniya || {};

  return (
    <div>
      <SectionNavigation
        title={"Duniya"}
        showCategory
        categories={categories}
      />
      <DuniyaImageSection article={rows?.[0]} />
      <DuniyaNewsFeeds
        articles={rows?.slice(1)}
        showButton={rows.length < count && !isLoading}
        onShowMore={handleShowMore}
      />
    </div>
  );
};

export default memo(DuniyaNews);
