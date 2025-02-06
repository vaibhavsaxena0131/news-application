import React from "react";
import NavigatePage from "../navigatePage";
import paths from "@/routes/paths";

const BreadCrumbs = ({ categoryName, subCategory }) => {
  const navigateUrl = paths.CATEGORY_NEWS(categoryName);
  const parentCategory = categoryName.split("-").join(" ");
  const childCategory = subCategory.split("-").join(" ");

  return (
    <section className="container mx-auto">
      <nav className="flex py-6">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li>
            <div className="items-center">
              <NavigatePage
                url={navigateUrl}
                className="ms-1 text-2xl font-normal text-gray-800 hover:underline md:ms-2"
              >
                {parentCategory}
              </NavigatePage>
            </div>
          </li>
          <li>/</li>
          <li>
            <div className="items-center">
              <span className="ms-1 text-xl font-light text-gray-500 md:ms-2 cursor-none pointer-events-none">
                {childCategory}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </section>
  );
};

export default BreadCrumbs;
