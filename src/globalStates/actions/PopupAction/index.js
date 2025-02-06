import { POPUP_CLOSE, POPUP_OPEN } from "../actionsType";

export const popupOpen = (payload) => ({
  type: POPUP_OPEN,
  payload: payload,
});

export const popupClose = (payload) => ({
  type: POPUP_CLOSE,
  payload: payload,
});
