import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSurvey, deleteSurvey, clearError } from "../../actions";
import Progress from "../Progress";
import Failure from "../Failure";

const SurveyDelete = ({
  survey,
  processing,
  error,
  fetchSurvey,
  deleteSurvey,
  clearError,
  match
}) => {
  const [message, setMessage] = useState("We are fetching your survey");

  useEffect(() => {
    fetchSurvey(match.params.id);
  }, []);

  return (
    <React.Fragment>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#f5edd7"
        }}
      >
        <div
          className="modal valign-wrapper"
          style={{
            zIndex: "999",
            display: "flex",
            justifyContent: "center",
            opacity: "1",
            top: "10%",
            bottom: "10%"
          }}
        >
          <div className="modal-content center">
            <h3 style={{ color: "#F44336" }}>Delete Survey</h3>
            <p style={{ margin: "3rem auto" }}>
              {`Are you sure you want to delete survey with title "${survey &&
                survey.title}" ?`}
            </p>
            <div className="card-action">
              <Link to={"/surveys"} className="teal btn-flat white-text left">
                Cancel
              </Link>
              <button
                onClick={() => {
                  setMessage("We are deleating your survey")
                  deleteSurvey(match.params.id);
                }}
                className="red btn-flat white-text right"
              >
                Delete
                <i className="material-icons right">delete</i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {processing && (
        <Progress
          title="Please wait ..."
          message={message}
        />
      )}
      {error && <Failure error={error} clearError={clearError} />}
    </React.Fragment>
  );
};

function mapStateToProps({ surveys }, ownProps) {
  return {
    survey: surveys.surveys[0],
    processing: surveys.processing,
    error: surveys.error
  };
  // return {
  //   survey: surveys.surveys.find(s => {
  //     return s._id === ownProps.match.params.id;
  //   })
  // };
}

export default connect(
  mapStateToProps,
  { fetchSurvey, deleteSurvey, clearError }
)(SurveyDelete);
