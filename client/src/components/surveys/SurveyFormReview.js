import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";
import Progress from "../Progress";

const SurveyFormReview = ({
  onCancel,
  formValues,
  submitSurvey,
  sending
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
          onClick={() => submitSurvey(formValues)}
          className="green btn-flat right white-text"
        >
          Send Survey
          <i className="material-icons right">email</i>
        </button>
      </div>
      {sending && <Progress message="We are sending your survey" />}
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
    sending: state.surveys.sending
  };
}

// const SurveyFormReview WithRouter = withRouter(SurveyFormReview);

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
