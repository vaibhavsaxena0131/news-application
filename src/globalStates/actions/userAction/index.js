import { GET_CURRENT_USER_DETAILS } from "../actionsType";

export const getCurrentUserDatails = () => ({
  type: GET_CURRENT_USER_DETAILS,
  method: "get",
  URLEndPoint: "CURRENT_USER_DETAILS",
  axiosService: true,
  toaster: {
    loading: true,
  },
});
