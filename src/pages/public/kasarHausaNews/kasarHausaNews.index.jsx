import { memo, useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import KasarHausaImageSection from "./kasarHausaImageSection";
import HausaNewsSection from "./hausaNewsSection/hausaNewsSection";
import CustomLoader from "@/layouts/skeletonLoaders";
import { KasarHausaPageArticles } from "@/globalStates/actions/articleAction";
import helpers from "@/utills/helpers";

const KasarHausaNews = ({ categories }) => {
  const dispatch = useDispatch();
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const { kasarHausa } = useSelector((state) => state?.articles);
  const isLoading = useSelector((state) => state.loader?.isLoading);

  // Detect initial screen size on mount
  useEffect(() => {
    setIsLargeScreen(window.innerWidth >= 768);

    const handleResize = helpers.debounce(() => {
      setIsLargeScreen(window.innerWidth >= 768);
    }, 150); // Debounce resize handler by 150ms

    window.addEventListener("resize", handleResize);

    // Clean up listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Memoize displayLinks to avoid unnecessary recalculations
  const displayLinks = useMemo(() => {
    if (isLargeScreen) {
      // For large screens, show only the first 6 items, and the rest in "More" dropdown
      const mainLinks = categories.slice(0, 6);
      const moreLinks = categories.slice(6);

      return [
        ...mainLinks,
        {
          name: "More",
          dropdown: true,
          dropDownList: moreLinks,
        },
      ];
    } else {
      // For small screens, display all items as a list
      return categories;
    }
  }, [isLargeScreen, categories]);

  useEffect(() => {
    dispatch(
      KasarHausaPageArticles({
        pagination: {
          page: 1,
          limit: 4,
        },
      })
    );
  }, [dispatch]);

  if (isLoading) {
    return <CustomLoader name="BlogEditorViewLoader"></CustomLoader>;
  }

  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation
        title={"Kasar Hausa"}
        showCategory
        categories={displayLinks}
      />
      <KasarHausaImageSection article={kasarHausa?.latestArticle} />
      <HausaNewsSection articlesData={kasarHausa} />
    </div>
  );
};

export default memo(KasarHausaNews);
