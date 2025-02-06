import { memo, useEffect } from "react";
import SectionNavigationIndex from "@/components/sectionNavigation/sectionNavigation.index";
import AfrikaLatestNews from "./afrikaLatestNews";
import AfrikaHeroSection from "./AfrikaHeroSection";
import { useDispatch, useSelector } from "react-redux";
import { AfrikaPageArticles } from "@/globalStates/actions/articleAction";
import CustomLoader from "@/layouts/skeletonLoaders";

const AfirkaNews = ({ categories }) => {
  const dispatch = useDispatch();
  const { afrika } = useSelector((state) => state?.articles);
  const isLoading = useSelector((state) => state.loader?.isLoading);

  useEffect(() => {
    dispatch(
      AfrikaPageArticles({
        pagination: {
          page: 1,
        },
      })
    );
  }, [dispatch]);

  if (isLoading) {
    return <CustomLoader name="MainSkeletonLoader"></CustomLoader>;
  }

  let { heroSection, latestArticles, mostPopularArticles } = afrika;

  return (
    <div>
      <SectionNavigationIndex
        title={"Afrika"}
        showCategory
        categories={categories}
      />
      <AfrikaHeroSection articles={heroSection} />
      <AfrikaLatestNews
        articles={latestArticles}
        mostPopularPost={mostPopularArticles}
      />
    </div>
  );
};

export default memo(AfirkaNews);
