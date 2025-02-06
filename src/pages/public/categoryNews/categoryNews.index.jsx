import { memo, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import KasarHausaNewsIndex from "../kasarHausaNews/kasarHausaNews.index";
import { useDispatch } from "react-redux";
import { fetchLocationCategory } from "@/globalStates/actions/cateGoryAction";
import CustomLoader from "@/layouts/skeletonLoaders";
import paths from "@/routes/paths";

const CategoryNews = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const [subCategory, setSubCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryName = useMemo(() => {
    return param?.categoryName;
  }, [param?.categoryName]);

  const fetchCategory = async (id) => {
    let category = await dispatch(fetchLocationCategory(id));
    if (category?.status === 200 && category?.data?.success) {
      return category?.data?.data;
    } else {
      return [];
    }
  };

  // Effect to fetch and update subCategory data
  useEffect(() => {
    if (categoryName) {
      setLoading(true);
      fetchCategory(categoryName).then((result) => {
        // if()result.l
        let data = result.map((item) => ({
          ...item,
          link: paths.SUBCATEGORY_NEWS(categoryName, item.category_code), // Replace underscores with hyphens
        }));
        setSubCategory(data); // Store the raw data
        setLoading(false);
      });
    }
    // eslint-disable-next-line
  }, [categoryName]);

  const currentPage = useMemo(() => {
    if (loading) {
      return <CustomLoader name="NewsSkeletonLoader" />;
    }
    return <KasarHausaNewsIndex categories={subCategory} />;
  }, [subCategory, categoryName, loading]);

  return <main className="bg-white py-6">{currentPage}</main>;
};

export default memo(CategoryNews);
