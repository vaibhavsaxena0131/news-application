import React, { memo } from "react";
import NavigatePage from "../navigatePage";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const SectionNavigation = ({
  title,
  titlePosition = "",
  titleClassname = "text-5xl font-light capitalize",
  categories = [],
  showCategory = false,
  as = "",
  isActive = "",
  onChangeTab = () => {},
}) => {
  // Scroll functions for the navigation bar (if required)
  const scrollLeft = () => {
    const nav = document.querySelector(".nav-scroll");
    nav.scrollLeft -= 100;
  };

  const scrollRight = () => {
    const nav = document.querySelector(".nav-scroll");
    nav.scrollLeft += 100;
  };

  return (
    <section className="container mx-auto py-6">
      {/* Section Header */}
      <div className={`text-center mb-6 ${titlePosition}`}>
        <h1 className={` ${titleClassname}`}>{title}</h1>
      </div>
      {/* Navigation Bar */}
      {showCategory && (
        <div className="flex justify-center items-center border-b border-gray-300 mb-6">
          {/* Left Scroll Arrow */}
          <button className="flex md:hidden p-2" onClick={scrollLeft}>
            <ChevronLeftIcon className="w-7 h-7" />
          </button>

          <nav className="nav-scroll flex space-x-6  overflow-x-auto scrollbar-hide">
            <ul className="flex space-x-6 py-2">
              {categories.map((category, index) => (
                <li key={`section-navigation-${index}`}>
                  {category?.dropdown ? (
                    <Menu>
                      <MenuButton className="text-2xl font-extralight text-black py-1 border-b-2 border-transparent hover:border-gray-600">
                        {category.name}
                      </MenuButton>
                      <MenuItems
                        anchor="bottom start"
                        className={"bg-white border border-gray-300 rounded-sm"}
                      >
                        {category?.dropDownList.map((link) => (
                          <MenuItem
                            key={link.name}
                            className="block p-2 data-[focus]:bg-blue-100"
                          >
                            <NavigatePage
                              url={link.link}
                              className="text-2xl font-extralight text-nowrap text-black py-1 border-b-2 border-transparent hover:border-gray-600"
                            >
                              {link.name}
                            </NavigatePage>
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  ) : as === "tab" ? (
                    <button
                      onClick={(e) => onChangeTab(e, category)}
                      className={`text-2xl text-nowrap font-extralight text-black py-1 border-b-2  cursor-pointer ${isActive === category.name ? "border-gray-600" : "border-transparent"} hover:border-gray-600`}
                    >
                      {category.name}
                    </button>
                  ) : (
                    <NavigatePage
                      url={category.link}
                      className="text-2xl text-nowrap font-extralight text-black py-1 border-b-2 border-transparent hover:border-gray-600"
                    >
                      {category.name}
                    </NavigatePage>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* Right Scroll Arrow */}
          <button className="flex md:hidden p-2" onClick={scrollRight}>
            <ChevronRightIcon className="w-7 h-7" />
          </button>
        </div>
      )}
    </section>
  );
};

export default memo(SectionNavigation);
