import React from "react";

const BlogEditorFormLoader = () => {
  return (
    <section className="container max-w-5xl mx-auto md:mt-5 pb-10 px-4 animate-pulse">
      <div className="pt-0 bg-white p-6 rounded-lg shadow-lg">
        {/* Title Skeleton */}
        <div className="mb-6">
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>

        {/* Description Skeleton */}
        <div className="mb-6">
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-24 bg-gray-200 rounded"></div>
        </div>

        {/* Author Name Skeleton */}
        <div className="mb-6">
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>

        {/* Country Autocomplete Skeleton */}
        <div className="mb-6">
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>

        {/* Sub-location Autocomplete Skeleton */}
        <div className="mb-6">
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>

        {/* Category Skeleton */}
        <div className="mb-6">
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>

        {/* Media Upload Skeleton */}
        <div className="mb-6">
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-48 bg-gray-200 rounded"></div>
        </div>

        {/* EditorJS Skeleton */}
        <div className="mb-6">
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>

        {/* Submit Button Skeleton */}
        <div className="h-12 bg-gray-300 rounded"></div>
      </div>
    </section>
  );
};

export default BlogEditorFormLoader;
