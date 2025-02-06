import { AUTH_TOKEN } from "../actionsType";

export const setAuthToken = (payload) => ({
  type: `${AUTH_TOKEN}_SUCCESS`,
  payload: payload,
});

export const removeAuthToken = (payload) => ({
  type: `REMOVE_${AUTH_TOKEN}`,
  payload: payload,
});

export const loginUser = (payload) => ({
  type: "LOGIN",
  method: "post",
  data: payload,
  URLEndPoint: "LOGIN",
  axiosService: true,
  toaster: {
    loading: true,
  },
});

export const logOutUser = () => ({
  type: "LOGOUT",
  method: "post",
  URLEndPoint: "LOGOUT",
  axiosService: true,
  toaster: {
    loading: true,
  },
});
