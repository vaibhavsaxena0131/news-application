import { FIELD_ERRORS } from "../../actions/actionsType";

export function FormDetails(state = { errors: [] }, action) {
  switch (action.type) {
    case FIELD_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
}
