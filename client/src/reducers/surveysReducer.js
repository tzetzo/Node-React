import {
  FETCH_SURVEYS,
  FETCH_SURVEY,
  CREATE_SURVEY,
  DELETE_SURVEY,
  PROCESSING_SURVEY_REQUEST,
  PROCESSING_SURVEY_FAILURE
} from "../actions/types";

export default function(
  state = { surveys: [], processing: false, error: "" },
  action
) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return { surveys: action.payload };
    case FETCH_SURVEY:
      return { surveys: [action.payload], processing: false, error: "" };
    case PROCESSING_SURVEY_REQUEST:
      return { ...state, processing: true };
    case CREATE_SURVEY:
    case DELETE_SURVEY:
      return { ...state, processing: false, error: "" };
    case PROCESSING_SURVEY_FAILURE:
      return { ...state, processing: false, error: action.payload };
    default:
      return state;
  }
}
