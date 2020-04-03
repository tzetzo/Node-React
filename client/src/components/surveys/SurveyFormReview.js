import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions";
import Progress from "../Progress";
import Failure from "../Failure";

const SurveyFormReview = ({
  onCancel,
  formValues,
  createSurvey,
  processing,
  error
}) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div>
        <h5>Please confirm your entries</h5>
        <div>{reviewFields}</div>
        <button
          className="yellow darken-3 white-text btn-flat"
          onClick={onCancel}
        >
          Back
        </button>
        <button
          onClick={() => createSurvey(formValues)}
          className="green btn-flat right white-text"
        >
          Create Survey
          <i className="material-icons right">email</i>
        </button>
      </div>
      {processing && (
        <Progress
          title="Please wait ..."
          message="We are creating your survey"
        />
      )}
      {error && <Failure redirect="/checkout" error={error} buttonText="Add Credits" />}
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
    processing: state.surveys.processing,
    error: state.surveys.error
  };
}

export default connect(
  mapStateToProps,
  actions
)(SurveyFormReview);
