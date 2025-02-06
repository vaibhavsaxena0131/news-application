import React, { memo } from "react";
import BlogEditorFormLoader from "./blogSkeletonLoader/BlogEditorFormLoader";
import BlogEditorViewLoader from "./blogSkeletonLoader/BlogEditorViewLoader";
import TableBodyLoader from "./tableSkeletonLoader/tableBodyLoader";
import NewsSkeletonLoader from "./newsSkeletonLoader/newsSkeletonLoader.index";
import MainSkeletonLoader from "./mainSkeletonLoader/mainSkeleton.index";

const componentMap = {
  BlogEditorFormLoader: BlogEditorFormLoader,
  BlogEditorViewLoader: BlogEditorViewLoader,
  TableBodyLoader: TableBodyLoader,
  NewsSkeletonLoader: NewsSkeletonLoader,
  MainSkeletonLoader: MainSkeletonLoader,
};

const CustomLoader = ({ count, name, ...rest }) => {
  const DynamicComponent = componentMap[name];

  if (!DynamicComponent) {
    return null;
  }

  return <DynamicComponent count={count} {...rest} />;
};

export default memo(CustomLoader);
