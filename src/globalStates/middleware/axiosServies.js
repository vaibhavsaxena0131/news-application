import axios from "axios";
import { REACT_APP_BASE_URL } from "@/constants/common";
import { loaderStart, loaderStop } from "@/globalStates/actions/loaderAction";
import apiEndPoint from "@/constants/apiEndPoints";
import { removeAuthToken } from "@/globalStates/actions/authAction";

const randomId = () => {
  const hex = (value) => Math.floor(value).toString(16);
  return (
    hex(Date.now() / 1000) +
    " ".repeat(16).replace(/./g, () => hex(Math.random() * 16))
  );
};

// const isBoolean = (value) => typeof value === 'boolean'
// const isString = (value) => typeof value === 'string'

const TOASTER_OBJECT = {
  loading: null,
  success: true,
  error: true,
};

const axiosInstance = axios.create();

// Map to store cancel tokens
const pendingRequests = new Map();

// Helper function to generate request key
const getRequestKey = (config) => {
  if (config?.method) {
    const { method = "", url = "", params = "", data = "" } = config;
    return [method, url, JSON.stringify(params), JSON.stringify(data)].join(
      "&"
    );
  }
  return [];
};

// Request interceptor to handle duplicate requests
axiosInstance.interceptors.request.use(
  (config) => {
    const requestKey = getRequestKey(config);

    // Cancel the previous request if it exists
    if (pendingRequests.has(requestKey)) {
      const cancel = pendingRequests.get(requestKey);
      cancel();
      pendingRequests.delete(requestKey);
    }

    // Generate a new cancel token and store it in the map
    const source = axios.CancelToken.source();
    config.cancelToken = source.token;
    pendingRequests.set(requestKey, source.cancel);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to remove completed requests from the map
axiosInstance.interceptors.response.use(
  (response) => {
    const requestKey = getRequestKey(response.config);
    pendingRequests.delete(requestKey);
    return response;
  },
  (error) => {
    if (axios.isCancel(error)) {
      console.info("Request canceled", error.message);
    } else {
      // Handle other errors
    }
    const requestKey = getRequestKey(error.config);
    pendingRequests.delete(requestKey);
    return Promise.reject(error);
  }
);

const getAxiosProps = (apiDetails, token) => {
  let {
    method,
    baseURL = REACT_APP_BASE_URL,
    url,
    data,
    params,
    header = {},
  } = apiDetails;
  return {
    method,
    baseURL,
    url,
    params,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
      "ngrok-skip-browser-warning": "69420",
      Accept: "application/json",
      ...header,
    },
  };
};

// const clearLocalStorage = () => localStorage.clear();

const AxiosService =
  ({ getState }) =>
  (next) =>
  async (action) => {
    const {
      type = "GET",
      data,
      params,
      header,
      method,
      baseURL,
      url,
      URLEndPoint,
      axiosService,
      toaster = {},
      withResponseReturnData = {},
    } = action;
    const {
      loading = TOASTER_OBJECT.loading,
      success = TOASTER_OBJECT.success,
      error = TOASTER_OBJECT.error,
    } = toaster;
    if (axiosService) {
      const loaderID = randomId();
      if (loading) {
        next(loaderStart({ id: loaderID, type }));
      }

      await next({
        type: `${type}_FETCHING`,
      });
      try {
        let token = getState().auth?.token;
        const response = await axiosInstance(
          getAxiosProps(
            {
              method,
              baseURL,
              url: URLEndPoint ? apiEndPoint[URLEndPoint] : url,
              header,
              data,
              params,
            },
            token
          )
        );

        if (success) {
          if (type === "LOGOUT") {
            await next(removeAuthToken(""));
            setTimeout(() => {
              if (window.location?.pathname !== "/") {
                window.location.replace("/");
              }
            }, 0);
          }
        }
        await next({
          type: `${type}`,
          payload: Object.keys(withResponseReturnData).length
            ? {
                ...withResponseReturnData,
                data: response?.data?.data || response.data,
              }
            : response?.data?.data || response.data,
        });

        return response;
      } catch (axiosError) {
        let errorResponse = "";
        if (error) {
          if (["canceled", "Network Error"].includes(axiosError?.message))
            return;
          const getErrors = [
            "Invalid user",
            "Signature has expired",
            "Invalid segment encoding",
            "Not an authorized user",
            "Token missing",
          ];
          // 'Network Error',
          // if (axiosError.message === 'Network Error') {
          //     window.location.replace('/network-error')
          // }
          if (
            getErrors.includes(axiosError?.response?.data?.message) ||
            getErrors.includes(axiosError?.response?.data?.errors) ||
            getErrors.includes(axiosError.message)
          ) {
            // clearLocalStorage();
            next(removeAuthToken(""));
            window.location.replace("/");
          } else {
            await next({
              type: `${type}_ERROR`,
              payload: {
                response: axiosError?.response,
                message: axiosError?.message,
                ...withResponseReturnData,
              },
            });
            errorResponse = {
              response: axiosError?.response,
              message: axiosError?.message,
            };
            if (
              [400, 401, 500].includes(
                axiosError?.status || axiosError?.response?.status
              )
            ) {
              errorResponse = {
                response: axiosError?.response,
                message: axiosError?.message,
              };
            }

            await next({
              type: `API_RESPONSE_ERROR`,
              payload: {
                response: axiosError?.response,
                message: axiosError?.message,
                ...withResponseReturnData,
              },
            });
            errorResponse = {
              response: axiosError?.response,
              message: axiosError?.message,
            };
          }
        } else {
          await next({
            type: `${type}_ERROR`,
            payload: {
              response: axiosError?.response,
              message: axiosError?.message,
            },
          });
          errorResponse = {
            response: axiosError?.response,
            message: axiosError?.message,
          };
        }
        return { ...errorResponse, ...withResponseReturnData };
      } finally {
        if (loading) {
          next(loaderStop({ id: loaderID }));
        }
      }
    } else {
      await next(action);
    }
    return getState();
  };

export default AxiosService;
