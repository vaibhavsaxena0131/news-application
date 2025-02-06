import { lazy } from "react";

const ConfirmDeleteBlog = lazy(
  () => import("@/components/alert/confirmBlogDelete")
);

export { ConfirmDeleteBlog };
