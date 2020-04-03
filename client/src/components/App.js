import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import history from "../history";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import SurveyDelete from "./surveys/SurveyDelete";
import CheckoutForm from "./checkout/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY); //https://stripe.com/docs/payments/accept-a-payment#web-create-payment-intent

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router history={history}>
        <Elements stripe={stripePromise}>
          <div className="container">
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Route path="/surveys/delete/:id" component={SurveyDelete} />
            <Route path="/checkout" component={CheckoutForm} />
          </div>
        </Elements>
      </Router>
    );
  }
}

// const mapStateToProps = ({auth}) => {
//   return {isSignedIn: auth.isSignedIn};
// }

export default connect(
  null,
  actions
)(App);
