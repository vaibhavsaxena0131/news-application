import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AfricaNews from "./africaNews";
import HeroGrid from "./heroGrid";
import HeroSection from "./heroSection";
import LatestNews from "./latestNews"; // corrected typo
import WorldNews from "./worldNews";
import { HomePageArticles } from "@/globalStates/actions/articleAction";
import CustomLoader from "@/layouts/skeletonLoaders";
import "./home.css";

// Memoized Components
const MemoizedHeroSection = React.memo(HeroSection);
const MemoizedHeroGrid = React.memo(HeroGrid);
const MemoizedAfricaNews = React.memo(AfricaNews);
const MemoizedWorldNews = React.memo(WorldNews);
const MemoizedLatestNews = React.memo(LatestNews);

const Home = () => {
  const dispatch = useDispatch();

  const { home } = useSelector((state) => state?.articles);
  const isLoading = useSelector((state) => state.loader?.isLoading);

  useEffect(() => {
    dispatch(HomePageArticles());
  }, [dispatch]);

  if (isLoading) {
    return <CustomLoader name="MainSkeletonLoader"></CustomLoader>;
  }

  const {
    heroSection = [],
    categories = [],
    afrika = [],
    duniya = [],
    duniya_popular_post,
    latest_posts = [],
    latest_popular_Posts,
  } = home || {};

  return (
    <main className="bg-white py-6">
      <MemoizedHeroSection articles={heroSection} />
      <MemoizedHeroGrid articles={categories} />
      <MemoizedAfricaNews articles={afrika.slice(0, 8)} />
      <MemoizedWorldNews
        articles={duniya.slice(0, 6)}
        mostPopularPost={duniya_popular_post}
      />
      <MemoizedLatestNews
        articles={latest_posts}
        mostPopularPost={latest_popular_Posts}
      />
    </main>
  );
};

export default Home;
