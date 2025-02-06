import {
  CLEAR_BLOG,
  CREATE_A_NEW_BLOG,
  FETCH_ALL_BLOG,
  SET_BLOG,
  FETCH_SINGLE_BLOG,
  UPDATE_SINGLE_BLOG,
  DELETE_SINGLE_BLOG,
} from "./actionsType";

import apiEndPoint from "@/constants/apiEndPoints";

export const setBlog = (blog) => ({
  type: SET_BLOG,
  payload: blog,
});

export const clearBlog = () => ({
  type: CLEAR_BLOG,
});

export const createNewBlog = (payload) => ({
  type: CREATE_A_NEW_BLOG,
  method: "post",
  data: payload,
  URLEndPoint: CREATE_A_NEW_BLOG,
  axiosService: true,
  toaster: {
    loading: true,
  },
});

export const fetchAllBlog = (payload) => ({
  type: FETCH_ALL_BLOG,
  method: "POST",
  data: payload,
  URLEndPoint: FETCH_ALL_BLOG,
  axiosService: true,
  toaster: {
    loading: true,
  },
});

export const fetchSingleBlog = (payload) => ({
  type: FETCH_SINGLE_BLOG,
  method: "GET",
  url: apiEndPoint.FETCH_SINGLE_BLOG(payload),
  axiosService: true,
  toaster: {
    loading: true,
  },
});

export const updateExistingBlog = (id, payload) => ({
  type: UPDATE_SINGLE_BLOG,
  method: "PUT",
  url: apiEndPoint.FETCH_SINGLE_BLOG(id),
  data: payload,
  axiosService: true,
  toaster: {
    loading: true,
  },
});

export const deleteExistingBlog = (id) => ({
  type: DELETE_SINGLE_BLOG,
  method: "DELETE",
  url: apiEndPoint.FETCH_SINGLE_BLOG(id),
  axiosService: true,
  withResponseReturnData: { id },
  toaster: {
    loading: true,
  },
});
