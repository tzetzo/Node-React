import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { fetchSurveys } from "../../actions";
import Progress from "../Progress";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="row" key={survey._id}>
          <div className="s12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title center">{survey.title}</span>
              </div>
              <div className="card-content white-text">
                <span>{survey.body}</span>
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
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.renderSurveys()}</div>
        {this.props.processing && (
          <Progress
            title="Please wait ..."
            message="We are fetching your surveys"
          />
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys: surveys.surveys, processing: surveys.processing };
}

// const SurveyFormReview WithRouter = withRouter(SurveyFormReview);

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
