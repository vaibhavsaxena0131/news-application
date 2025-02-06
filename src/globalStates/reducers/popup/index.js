import { POPUP_CLOSE, POPUP_OPEN } from "../../actions/actionsType";

const PopupDetails = (
  state = { type: "", open: false, crossIcon: true },
  action
) => {
  switch (action.type) {
    case POPUP_OPEN:
      return {
        ...state,
        ...action.payload,
      };
    case POPUP_CLOSE:
      return {
        type: "",
        open: false,
        crossIcon: true,
        ...(action.payload || {}),
      };
    default:
      return state;
  }
};

export default PopupDetails;
