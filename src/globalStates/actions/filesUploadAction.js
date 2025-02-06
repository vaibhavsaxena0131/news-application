import { UPLOAD_ARTICLE_FILES } from "./actionsType";

export const UploadFiles = (payload) => ({
  type: UPLOAD_ARTICLE_FILES,
  method: "POST",
  URLEndPoint: UPLOAD_ARTICLE_FILES,
  data: payload,
  header: {
    "Content-Type": "multipart/form-data",
  },
  axiosService: true,
  toaster: {
    loading: true,
  },
});
