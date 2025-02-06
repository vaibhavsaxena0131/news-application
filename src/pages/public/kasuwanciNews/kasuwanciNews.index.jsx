import { memo, useEffect } from "react";
import KasumanciImageSection from "./KasumanciImageSection";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import KasuwanciHeroGrid from "./kasuwanciHeroGrid";
import AdvertisingSection from "@/components/advertising/advertisingSection";
import { useDispatch, useSelector } from "react-redux";
import CustomLoader from "@/layouts/skeletonLoaders";
import { KasuwanciPageArticles } from "@/globalStates/actions/articleAction";

const KasuwanciNews = () => {
  const dispatch = useDispatch();
  const { kasuwanci } = useSelector((state) => state?.articles);
  const isLoading = useSelector((state) => state.loader?.isLoading);

  useEffect(() => {
    dispatch(
      KasuwanciPageArticles({
        pagination: {
          page: 1,
        },
      })
    );
  }, [dispatch]);

  if (isLoading) {
    return <CustomLoader name="NewsSkeletonLoader"></CustomLoader>;
  }

  let {
    latest_article: heroSection = {},
    grouped_articles: categoriesArticles = {},
  } = kasuwanci;
  return (
    <div className="">
      <SectionNavigation title={"Kasuwanci"} />
      <section className="container mx-auto px-4">
        <div className="flex gap-10 w-full justify-center relative">
          <AdvertisingSection />
          <div>
            <KasumanciImageSection article={heroSection} />
            <KasuwanciHeroGrid categoriesArticles={categoriesArticles} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(KasuwanciNews);
