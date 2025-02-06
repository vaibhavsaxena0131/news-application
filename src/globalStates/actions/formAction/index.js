import { FIELD_ERRORS } from "../actionsType";

export const setFormFieldErrors = (payload) => ({
  type: FIELD_ERRORS,
  payload: payload,
});
