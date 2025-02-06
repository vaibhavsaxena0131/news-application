import { LOADER_START, LOADER_STOP } from "../actionsType";

export const loaderStart = (payload) => ({
  type: LOADER_START,
  payload: payload,
});

export const loaderStop = (payload) => ({
  type: LOADER_STOP,
  payload: payload,
});
