import { GET_CURRENT_USER_DETAILS } from "../../actions/actionsType";

export function UserDetails(state = {}, action) {
  switch (action.type) {
    case `${GET_CURRENT_USER_DETAILS}_SUCCESS`:
      return action.payload;
    default:
      return state;
  }
}
