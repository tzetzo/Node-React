import axios from "axios";
import history from "../history";
import {
  FETCH_USER,
  FETCH_SURVEYS,
  FETCH_SURVEY,
  CREATE_SURVEY,
  DELETE_SURVEY,
  PROCESSING_SURVEY_REQUEST,
  PROCESSING_SURVEY_FAILURE,
  UPDATE_USER_CREDITS
} from "./types";

export const updateUserCredits = () => {
  return {
    type: UPDATE_USER_CREDITS
  };
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const createSurvey = formValues => async dispatch => {
  dispatch({ type: PROCESSING_SURVEY_REQUEST }); // opens the progress screen

  try {
    const res = await axios.post("/api/surveys", formValues);
    dispatch({ type: CREATE_SURVEY });
    dispatch({ type: FETCH_USER, payload: res.data }); //so to update the credits in the UI
    history.push("/surveys");
  } catch (error) {
    dispatch({ type: PROCESSING_SURVEY_FAILURE, payload: error.response.data.error });
  }
};

export const fetchSurveys = () => async dispatch => {
  dispatch({ type: PROCESSING_SURVEY_REQUEST }); // opens the progress screen

  try {
    const res = await axios.get("/api/surveys");
    dispatch({ type: FETCH_SURVEYS, payload: res.data });
  } catch (error) {
    dispatch({ type: PROCESSING_SURVEY_FAILURE, payload: error.message });
  }
};

export const fetchSurvey = id => async dispatch => {
  dispatch({ type: PROCESSING_SURVEY_REQUEST }); // opens the progress screen

  try {
    const res = await axios.get(`/api/surveys/${id}`);
    dispatch({ type: FETCH_SURVEY, payload: res.data });
  } catch (error) {
    dispatch({ type: PROCESSING_SURVEY_FAILURE, payload: error.message });
  }
};

export const deleteSurvey = id => async dispatch => {
  dispatch({ type: PROCESSING_SURVEY_REQUEST }); // opens the progress screen

  try {
    await axios.delete(`/api/surveys/${id}`);
    dispatch({ type: DELETE_SURVEY });
    history.push("/surveys");
  } catch (error) {
    dispatch({ type: PROCESSING_SURVEY_FAILURE, payload: error.message });
  }
};
