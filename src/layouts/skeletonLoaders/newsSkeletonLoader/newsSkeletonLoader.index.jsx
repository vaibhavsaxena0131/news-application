const NewsSkeletonLoader = () => {
  return (
    <div className="animate-pulse">
      {/* Title Skeleton */}
      <div className="container mx-auto py-6">
        <div className="text-center mb-6">
          <div className="h-10 bg-gray-300 rounded w-1/4 mx-auto"></div>
        </div>

        {/* Navigation Skeleton */}
        <div className="flex justify-center items-center border-b border-gray-300 mb-6">
          <div className="flex md:hidden p-2 bg-gray-300 rounded-full w-8 h-8"></div>
          <nav className="nav-scroll flex space-x-6 overflow-x-auto scrollbar-hide">
            <ul className="flex space-x-6 py-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <li key={index}>
                  <div className="h-8 bg-gray-300 rounded w-24"></div>
                </li>
              ))}
              <li>
                <div className="h-8 bg-gray-300 rounded w-16"></div>
              </li>
            </ul>
          </nav>
          <div className="flex md:hidden p-2 bg-gray-300 rounded-full w-8 h-8"></div>
        </div>
      </div>

      {/* Image Section Skeleton */}
      <div className="container mx-auto">
        <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative h-[22rem] md:h-[25rem] lg:h-[34rem] bg-gray-300"></div>
          <div className="absolute bottom-4 left-4 max-w-xl w-full bg-gray-200 rounded p-4">
            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSkeletonLoader;
