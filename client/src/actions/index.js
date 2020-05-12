import axios from "axios";
import history from "../history";
import {
  FETCH_USER,
  FETCH_SURVEYS,
  FETCH_SURVEY,
  CREATE_SURVEY,
  DELETE_SURVEY,
  PROCESSING_REQUEST,
  PROCESSING_FAILURE,
  UPDATE_USER_CREDITS,
  CLEAR_ERROR,
} from "./types";

export const updateUserCredits = () => {
  //better solution is using websockets and update the credits when server sends them
  return {
    type: UPDATE_USER_CREDITS,
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};

export const fetchUser = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (error) {
    dispatch({
      type: PROCESSING_FAILURE,
      payload: `${error.message} -> Please check you Internet connection`,
    });
  }
};

export const createSurvey = (formValues, file) => async (dispatch) => {
  dispatch({ type: PROCESSING_REQUEST }); // opens the progress screen

  try {
    let res;

    if (file) {
      // get S3 signed URL from our back-end
      const { data } = await axios.get("/api/upload");
      // upload Image file to AWS S3
      await axios.put(data.url, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      // create the survey with image
      res = await axios.post("/api/surveys", {
        ...formValues,
        imageUrl: data.key,
      });
    } else {
      // create the survey without image
      res = await axios.post("/api/surveys", formValues);
    }

    dispatch({ type: CREATE_SURVEY });
    dispatch({ type: FETCH_USER, payload: res.data }); //so to update the credits in the UI
    history.push("/surveys");
  } catch (error) {
    const payload = error.response
      ? error.response.data.error //error returned by the back-end
      : `${error.message} -> Please check you Internet connection`;

    dispatch({
      type: PROCESSING_FAILURE,
      payload,
    });
  }
};

export const fetchSurveys = () => async (dispatch) => {
  dispatch({ type: PROCESSING_REQUEST }); // opens the progress screen

  try {
    const res = await axios.get("/api/surveys");
    dispatch({ type: FETCH_SURVEYS, payload: res.data });
  } catch (error) {
    const payload = error.response
      ? error.response.data.error //error returned by the back-end
      : `${error.message} -> Please check you Internet connection`;

    dispatch({
      type: PROCESSING_FAILURE,
      payload,
    });
  }
};

export const fetchSurvey = (id) => async (dispatch) => {
  dispatch({ type: PROCESSING_REQUEST }); // opens the progress screen

  try {
    const res = await axios.get(`/api/surveys/${id}`);
    dispatch({ type: FETCH_SURVEY, payload: res.data });
  } catch (error) {
    const payload = error.response
      ? error.response.data.error //error returned by the back-end
      : `${error.message} -> Please check you Internet connection`;

    dispatch({
      type: PROCESSING_FAILURE,
      payload,
    });
  }
};

export const deleteSurvey = (id) => async (dispatch) => {
  dispatch({ type: PROCESSING_REQUEST }); // opens the progress screen

  try {
    await axios.delete(`/api/surveys/${id}`);
    dispatch({ type: DELETE_SURVEY });
    history.push("/surveys");
  } catch (error) {
    const payload = error.response
      ? error.response.data.error //error returned by the back-end
      : `${error.message} -> Please check you Internet connection`;

    dispatch({
      type: PROCESSING_FAILURE,
      payload,
    });
  }
};
