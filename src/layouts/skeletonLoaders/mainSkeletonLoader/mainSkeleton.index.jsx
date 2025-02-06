import React from "react";

const MainSkeletonLoader = () => {
  return (
    <main className="bg-white py-6">
      <section className="container mx-auto md:mt-10 pb-10">
        <div className="flex flex-col md:flex-row items-stretch gap-3">
          {/* Main Article Skeleton */}
          <div className="w-full lg:w-2/4">
            <article className="flex flex-col h-full animate-pulse">
              {/* Image Skeleton */}
              <div className="w-full aspect-video bg-gray-200 rounded-md mb-4"></div>

              {/* Text Skeleton */}
              <div className="flex flex-col gap-4 h-full">
                <div className="h-10 bg-gray-200 rounded-md w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded-md w-full"></div>
                <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
              </div>
            </article>
          </div>

          {/* Sidebar Articles Skeleton */}
          <div className="w-full md:w-1/4">
            <div className="flex flex-col gap-2 h-full animate-pulse">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="flex flex-col gap-2 flex-grow">
                  {/* Image Skeleton */}
                  <div className="w-full aspect-video bg-gray-200 rounded-md"></div>

                  {/* Text Skeleton */}
                  <div className="flex flex-col gap-2">
                    <div className="h-6 bg-gray-200 rounded-md w-3/4"></div>
                    <div className="flex items-center gap-1">
                      <div className="h-4 bg-gray-200 rounded-md w-1/3"></div>
                      <div className="h-4 bg-gray-200 rounded-md w-1/4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Sidebar List Skeleton */}
          <div className="w-full md:w-1/4">
            <div className="flex flex-col gap-2 h-full animate-pulse">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="px-3 flex flex-col gap-2 py-2 flex-grow border-b-2 border-gray-300"
                >
                  <div className="h-6 bg-gray-200 rounded-md w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-1/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section Skeleton */}
      <section className="!relative">
        <section className="container mx-auto px-4">
          <hr className="w-full h-0.5 my-8 bg-gray-300 border-0 rounded dark:bg-gray-700" />

          <div className="bg-white animate-pulse">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
              <div className="w-full py-3 flex justify-between items-center bg-gray-200/50 px-2 mb-2">
                <div className="h-8 bg-gray-200 rounded-md w-1/3"></div>
                <div className="h-6 bg-gray-200 rounded-md w-1/4"></div>
              </div>

              <div className="flex flex-row flex-wrap">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink max-w-full sm:w-full md:w-1/2 lg:w-1/3 px-3 pb-3 pt-3 border-b-2 sm:border-b-0 border-dotted border-gray-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 bg-gray-200 rounded-md w-8"></div>
                      <div className="flex flex-col gap-2 py-0 md:w-full sm:py-3 pl-3 sm:pl-0">
                        <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                        <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
                        <div className="flex items-center gap-1">
                          <div className="h-4 bg-gray-200 rounded-md w-1/4"></div>
                          <div className="h-4 bg-gray-200 rounded-md w-1/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default MainSkeletonLoader;
