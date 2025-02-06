import { memo, useEffect } from "react";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
// import paths from "@/routes/paths";
import WasanniHeroSection from "./wasanniHeroSection";
import WasanniNewsFeeds from "./wasanniFeeds";
import { useDispatch, useSelector } from "react-redux";
import CustomLoader from "@/layouts/skeletonLoaders";
import { WasanniPageArticles } from "@/globalStates/actions/articleAction";
import WasanniHeroGrid from "./wasanniHeroGrid";

const WasanniNews = () =>
  // {
  //   // categories
  // }
  {
    const dispatch = useDispatch();
    const { wasanni } = useSelector((state) => state?.articles);
    // const isLoading = useSelector((state) => state.loader?.isLoading);
    const loader = useSelector((state) => state.loader?.loadingArray);
    const isLoading = loader.find(
      (item) => item?.type === "WASANNI_PAGE_ARTICLES"
    )?.type;

    useEffect(() => {
      dispatch(
        WasanniPageArticles({
          pagination: {
            page: 1,
          },
        })
      );
    }, [dispatch]);

    if (isLoading) {
      return <CustomLoader name="NewsSkeletonLoader"></CustomLoader>;
    }

    let { heroSection = {}, categories: gridArticles = [] } = wasanni;

    return (
      <div className="">
        <SectionNavigation
          title={"Wasanni"}
          // showCategory
          // categories={categories}
        />
        <WasanniHeroSection articles={heroSection} />
        <WasanniHeroGrid articles={gridArticles} />
        {heroSection?.mainArticle && <WasanniNewsFeeds />}
      </div>
    );
  };

export default memo(WasanniNews);
