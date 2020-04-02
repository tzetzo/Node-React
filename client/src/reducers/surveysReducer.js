import {
  FETCH_SURVEYS,
  CREATE_SURVEY_REQUEST,
  CREATE_SURVEY_SUCCESS,
  CREATE_SURVEY_FAILURE
} from "../actions/types";

export default function(
  state = { surveys: [], sending: false, error: "" },
  action
) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return { ...state, surveys: action.payload };
    case CREATE_SURVEY_REQUEST:
      return { ...state, sending: true };
    case CREATE_SURVEY_SUCCESS:
      return { ...state, sending: false, error: "" };
    case CREATE_SURVEY_FAILURE:
      return { ...state, sending: false, error: action.payload };
    default:
      return state;
  }
}
