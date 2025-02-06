import { useParams } from "react-router-dom";
import KasarHausaStateHeroSection from "./kasarHausaState.heroSection";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlog } from "@/globalStates/actions/blogActions";
import CustomLoader from "@/layouts/skeletonLoaders";

const KasarHausaStatePage = ({ categories = [] }) => {
  const { subCategory } = useParams();
  const dispatch = useDispatch();

  // Selector to fetch blog data from the Redux store
  const { blogData, isLoading } = useSelector((state) => {
    // Destructure blog state for clarity
    const { allBlogs } = state.blog || {};
    const rows = allBlogs?.rows || [];

    // Safely return the last blog entry or null as fallback
    return {
      blogData: rows.length > 0 ? rows[rows.length - 1] : null,
      isLoading: state?.loader?.isLoading,
    };
  });

  // Active tab state, initialized to the first category or null
  const [activeTab, setActiveTab] = useState(categories[0] || null);

  // Effect to set the default active tab when categories change
  useEffect(() => {
    if (categories.length > 0 && !activeTab) {
      setActiveTab(categories[0]);
    }
  }, [categories, activeTab]);

  // Effect to fetch blog data when the active tab changes
  useEffect(() => {
    if (activeTab?.id) {
      dispatch(
        fetchAllBlog({
          pagination: {
            page: 1,
            limit: 10,
          },
          filters: {
            category_id: activeTab.id,
          },
        })
      );
    }
  }, [dispatch, activeTab]);

  // Callback to handle tab change
  const handleTabChange = useCallback((e, category) => {
    setActiveTab(category);
  }, []);

  // Memoized categories to prevent unnecessary renders
  const memoizedCategories = useMemo(() => categories, [categories]);

  return (
    <div>
      {/* Section Navigation */}
      <SectionNavigation
        title={subCategory}
        showCategory
        categories={memoizedCategories}
        as="tab"
        isActive={activeTab?.name}
        onChangeTab={handleTabChange}
      />

      {/* Hero Section */}
      {isLoading && (
        <CustomLoader name="BlogEditorViewLoader" toggleTitleSection={false} />
      )}
      {activeTab?.name && blogData && (
        <KasarHausaStateHeroSection
          currentTab={activeTab.name}
          articleDetails={blogData}
        />
      )}
    </div>
  );
};

export default KasarHausaStatePage;
