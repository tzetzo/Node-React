import _ from "lodash";
import React, { useState } from "react";
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
  error,
  clearError,
}) => {
  {/*For uploading image file*/}
  const [file, setFile] = useState(null);

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
        <h5 className="test-review-heading">Please confirm your entries</h5>
        <div style={{ margin: "3rem auto" }}>{reviewFields}</div>

        {/*Adding image upload input*/}
        <h5>Add an Image</h5>
        <input
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          type="file"
          accept="image/*"
        />

        <button
          className="yellow darken-3 white-text btn-flat"
          onClick={onCancel}
        >
          Back
        </button>
        <button
          onClick={() => {
            {/*Sending image file separately as it will be directly uploaded to S3 before form values being sent to our Node back-end*/}
            createSurvey(formValues, file);
          }}
          className="green btn-flat right white-text test-create-survey"
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
      {error && <Failure error={error} clearError={clearError} />}
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
    processing: state.surveys.processing,
    error: state.surveys.error,
  };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
