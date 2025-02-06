import apiEndPoint from "@/constants/apiEndPoints";

export const fetchLocationCategory = (payload) => ({
  type: "GET_LOCATION_CATEGORY",
  method: "GET",
  url: apiEndPoint.FETCH_CATEGORY_LIST + payload,
  axiosService: true,
});
