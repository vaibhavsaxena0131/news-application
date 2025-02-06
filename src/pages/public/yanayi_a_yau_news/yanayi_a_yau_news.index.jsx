import { memo, useEffect } from "react";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import Yanayi_a_you_hero_section from "./yanayi_a_you_hero_section";
import { useDispatch, useSelector } from "react-redux";
import CustomLoader from "@/layouts/skeletonLoaders";
import { YanayiPageArticles } from "@/globalStates/actions/articleAction";

const Yanayi_a_yau_news = () => {
  const dispatch = useDispatch();
  const { yanayi_a_yau } = useSelector((state) => state?.articles);
  const isLoading = useSelector((state) => state.loader?.isLoading);

  useEffect(() => {
    dispatch(
      YanayiPageArticles({
        pagination: {
          page: 1,
        },
      })
    );
  }, [dispatch]);

  if (isLoading) {
    return <CustomLoader name="NewsSkeletonLoader"></CustomLoader>;
  }

  return (
    <div className="">
      <SectionNavigation title={"Yanayi a yau"} />
      <Yanayi_a_you_hero_section articles={yanayi_a_yau} />
    </div>
  );
};

export default memo(Yanayi_a_yau_news);
