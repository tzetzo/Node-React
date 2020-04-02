import axios from "axios";
import history from "../history";
import {
  FETCH_USER,
  FETCH_SURVEYS,
  CREATE_SURVEY_REQUEST,
  CREATE_SURVEY_SUCCESS,
  CREATE_SURVEY_FAILURE
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = formValues => async dispatch => {
  dispatch({ type: CREATE_SURVEY_REQUEST }); // opens the progress screen

  try {
    const res = await axios.post("/api/surveys", formValues);
    dispatch({ type: CREATE_SURVEY_SUCCESS });
    dispatch({ type: FETCH_USER, payload: res.data });
    history.push("/surveys");
  } catch (error) {
    dispatch({ type: CREATE_SURVEY_FAILURE, payload: error.message });
  }
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
