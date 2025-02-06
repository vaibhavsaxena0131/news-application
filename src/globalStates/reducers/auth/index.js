import { AUTH_TOKEN } from "../../actions/actionsType";

export function AuthDetails(state = { type: "" }, action) {
  switch (action.type) {
    case `${AUTH_TOKEN}_SUCCESS`:
      return action.payload;
    case `REMOVE_${AUTH_TOKEN}`:
      return { type: "" };
    default:
      return state;
  }
}
