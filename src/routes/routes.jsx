// routes.js
import {
  Home,
  LoginPage,
  CategoryNews,
  SubCategoryNews,
  ShowBlog,
} from "./components";

import paths from "./paths";

export const PublicRoutes = {
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: paths?.CATEGORY_NEWS(),
      children: [
        {
          index: true,
          element: <CategoryNews />,
        },
        {
          path: paths?.SUBCATEGORY_NEWS(),
          element: <SubCategoryNews />,
        },
      ],
    },
    { path: paths.VIEW_BLOG(), element: <ShowBlog /> },
  ],
};