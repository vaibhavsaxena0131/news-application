import React from "react";

const BlogEditorViewLoader = ({ toggleTitleSection = true }) => {
  return (
    <div className="container max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg blog-container">
      {toggleTitleSection && (
        <>
          {/* Blog Title Skeleton */}
          <div className="h-8 bg-gray-300 rounded mb-4 w-3/4"></div>

          {/* Blog Metadata Skeleton */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          </div>

          {/* Blog Description Skeleton */}
          <div className="h-6 bg-gray-300 rounded mb-8 w-2/3"></div>
        </>
      )}
      {/* Media Skeleton */}
      <div className="mb-8">
        <div className="h-64 bg-gray-300 rounded mb-4 w-full"></div>
      </div>

      {/* Blog Content Skeleton */}
      <div className="my-10">
        {/* Header Skeleton */}
        <div className="h-8 bg-gray-300 rounded mb-4 w-3/4"></div>

        {/* Paragraph Skeleton */}
        <div className="h-6 bg-gray-300 rounded mb-4 w-full"></div>
        <div className="h-6 bg-gray-300 rounded mb-4 w-full"></div>

        {/* List Skeleton */}
        <div className="h-6 bg-gray-300 rounded mb-4 w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded mb-4 w-3/4"></div>

        {/* Image Skeleton */}
        <div className="h-64 bg-gray-300 rounded mb-4 w-full"></div>
      </div>
    </div>
  );
};

export default BlogEditorViewLoader;
