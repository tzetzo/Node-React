import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="row" key={survey._id}>
          <div className="col s12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{survey.title}</span>
                <p>{survey.body}</p>
                <p className="right">
                  Sent: {moment(survey.dateSent).format("DD MMM YYYY")}
                </p>
              </div>
              <div className="card-content white-text">
                <span style={{ marginRight: "3rem" }}>Yes: {survey.yes}</span>
                <span className="">No: {survey.no}</span>
                <p className="right">
                  Last Responded:{" "}
                  {survey.lastResponded
                    ? moment(survey.lastResponded).format("DD MMM YYYY")
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys: surveys.surveys };
}

// const SurveyFormReview WithRouter = withRouter(SurveyFormReview);

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
