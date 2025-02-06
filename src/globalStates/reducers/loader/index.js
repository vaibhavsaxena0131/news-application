import { LOADER_START, LOADER_STOP } from "../../actions/actionsType";

const loaderReducer = (
  state = { loadingArray: [], isLoading: false },
  { type, payload }
) => {
  switch (type) {
    case LOADER_START: {
      let loadingArrayData = [...state.loadingArray, payload];
      return {
        ...state,
        loadingArray: loadingArrayData,
        isLoading: loadingArrayData.length > 0,
      };
    }
    case LOADER_STOP: {
      let loadingArray = state.loadingArray.filter((i) => i.id !== payload.id);
      return {
        ...state,
        loadingArray: loadingArray,
        isLoading: loadingArray.length > 0,
      };
    }
    default: {
      return state;
    }
  }
};

export default loaderReducer;
