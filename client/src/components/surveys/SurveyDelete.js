import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSurvey, deleteSurvey } from "../../actions";

const SurveyDelete = props => {
  useEffect(() => {
    props.fetchSurvey(props.match.params.id);
  }, []);

  return (
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
            {`Are you sure you want to delete survey with title "${props.survey &&
              props.survey.title}" ?`}
          </p>
          <div className="card-action">
            <Link to={"/surveys"} className="teal btn-flat white-text left">
              Cancel
            </Link>
            <button
              onClick={() => {
                props.deleteSurvey(props.match.params.id);
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
  );
};

function mapStateToProps({ surveys }, ownProps) {
  return { survey: surveys.surveys[0] };
  // return {
  //   survey: surveys.surveys.find(s => {
  //     return s._id === ownProps.match.params.id;
  //   })
  // };
}

export default connect(
  mapStateToProps,
  { fetchSurvey, deleteSurvey }
)(SurveyDelete);
