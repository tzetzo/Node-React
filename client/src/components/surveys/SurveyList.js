import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import arraySort from "array-sort";
import { fetchSurveys, clearError } from "../../actions";
import SurveySort from "./SurveySort";
import sortFields from "./sortFields";
import Progress from "../Progress";
import Failure from "../Failure";

class SurveyList extends Component {
  state = { by: sortFields[0].value, reverse: true };

  sortBy = (by) => {
    this.setState({ by });
  };
  reverse = () => {
    this.setState((prevState) => ({ reverse: !prevState.reverse }));
  };

  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    if (this.props.surveys.length === 0 || !Array.isArray(this.props.surveys))
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "18rem",
          }}
        >
          YOU HAVE NOT CREATED SURVEYS YET
        </div>
      );

    return arraySort(this.props.surveys, this.state.by, {
      reverse: this.state.reverse,
    }).map((survey) => {
      return (
        <div className="card blue-grey darken-1 test-card" key={survey._id}>
          <div className="card-content white-text">
            <span className="card-title center test-title">{survey.title}</span>
          </div>
          <div className="card-content white-text">
            <span className="test-body">{survey.body}</span>
            <p className="right">
              Sent: {moment(survey.dateSent).format("DD MMM YYYY")}
            </p>
          </div>
          <div className="card-content white-text">
            <span style={{ marginRight: "3rem" }}>Yes: {survey.yes}</span>
            <span style={{ marginRight: "3rem" }}>No: {survey.no}</span>
            <p className="right">
              Last Responded:{" "}
              {survey.lastResponded
                ? moment(survey.lastResponded).format("DD MMM YYYY")
                : "N/A"}
            </p>
          </div>
          <div className="card-content white-text center">
            <Link to={`/surveys/delete/${survey._id}`} className="btn">
              Delete
            </Link>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <SurveySort
          sortFields={sortFields}
          sortBy={this.sortBy}
          reverse={this.reverse}
        />

        <div>
          <div className="row">
            <div className="s12">{this.renderSurveys()}</div>
          </div>
        </div>

        {this.props.processing && (
          <Progress
            title="Please wait ..."
            message="We are fetching your surveys"
          />
        )}

        {this.props.error && (
          <Failure
            error={this.props.error}
            clearError={this.props.clearError}
          />
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps({ surveys }) {
  return {
    surveys: surveys.surveys,
    processing: surveys.processing,
    error: surveys.error,
  };
}

export default connect(mapStateToProps, { fetchSurveys, clearError })(
  SurveyList
);
