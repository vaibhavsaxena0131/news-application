import React from "react";
import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/solid";
import NoDataFoundMessage from "@/constants/NoDataFoundMessage";
import NavigatePage from "@/components/navigatePage";
import paths from "@/routes/paths";
import CustomLoader from "@/layouts/skeletonLoaders";
import Pagination from "../../pagination/paginationUI";

const BlogTable = ({
  blogs = {},
  isLoading = false,
  onDelete,
  onPageChange = () => {},
  pageSize = 10,
  currentPage = 1,
}) => {
  let { rows = [], count = 1 } = blogs;

  if (rows.length === 0 && !isLoading) {
    return (
      <NoDataFoundMessage message="No blogs available. Please add a new article." />
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg bg-white border border-gray-200">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600 uppercase text-xs md:text-sm leading-normal">
            <th className="py-3 px-4 md:px-6">Title</th>
            <th className="py-3 px-4 md:px-6 hidden sm:table-cell">Author</th>
            <th className="py-3 px-4 md:px-6 hidden lg:table-cell">Category</th>
            <th className="py-3 px-4 md:px-6 hidden md:table-cell">Date</th>
            <th className="py-3 px-4 md:px-6 text-center">Actions</th>
          </tr>
        </thead>
        {isLoading ? (
          <CustomLoader name={"TableBodyLoader"} />
        ) : (
          <>
            <tbody className="text-gray-700 text-xs md:text-sm font-light">
              {rows.map((blog) => (
                <tr
                  key={blog.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition duration-200"
                >
                  <td className="py-3 px-4 md:px-6 whitespace-nowrap">
                    {blog.title}
                  </td>
                  <td className="py-3 px-4 md:px-6 hidden sm:table-cell">
                    {blog.author}
                  </td>
                  <td className="py-3 px-4 md:px-6 hidden lg:table-cell">
                    {blog.category?.name}
                  </td>
                  <td className="py-3 px-4 md:px-6 hidden md:table-cell">
                    {new Date(blog.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 md:px-6 text-center">
                    <div className="flex item-center justify-center space-x-2 md:space-x-4">
                      <NavigatePage
                        url={paths.VIEW_BLOG(blog.id)}
                        className="text-blue-500 hover:text-blue-700 transition-colors duration-150"
                      >
                        <EyeIcon className="w-4 h-4 md:w-5 md:h-5" />
                      </NavigatePage>

                      <NavigatePage
                        url={paths.EDIT_BLOG(blog.id)}
                        className="text-green-500 hover:text-green-700 transition-colors duration-150"
                      >
                        <PencilIcon className="w-4 h-4 md:w-5 md:h-5" />
                      </NavigatePage>
                      <NavigatePage
                        type="dispatchAction"
                        dispatchFun={() => onDelete(blog.id)}
                        className="text-red-500 hover:text-red-700 transition-colors duration-150"
                      >
                        <TrashIcon className="w-4 h-4 md:w-5 md:h-5" />
                      </NavigatePage>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5} className="pb-2">
                  <Pagination
                    totalPages={Math.ceil(count / pageSize)}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                  />
                </td>
              </tr>
            </tfoot>
          </>
        )}
      </table>
    </div>
  );
};

export default BlogTable;
