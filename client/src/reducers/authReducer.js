import { FETCH_USER,UPDATE_USER_CREDITS } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case UPDATE_USER_CREDITS:
      return {...state, credits: state.credits + 5}
    default:
      return state;
  }
}
