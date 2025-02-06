// components.js
import { lazy } from "react";

// public pages
import Home from "@/pages/Home";

const LoginPage = lazy(() => import("@/pages/login"));
const CategoryNews = lazy(
  () => import("@/pages/public/categoryNews/categoryNews.index")
);
const SubCategoryNews = lazy(
  () => import("@/pages/public/categoryNews/subCategoryNews.index")
);

const BlogEditor = lazy(() => import("@/pages/blog/blogEditor"));
const ShowBlog = lazy(() => import("@/pages/blog/showBlog"));

export {
  Home,
  LoginPage,
  CategoryNews,
  SubCategoryNews,
  BlogEditor,
  ShowBlog,
};
