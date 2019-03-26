import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";

export default combineReducers({
  auth: authReducer, //corresponds to a property of the redux state object
  form: reduxForm,
  surveys: surveysReducer
});
