import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout"; //shows the button for the checkout form; https://github.com/azmenak/react-stripe-checkout
import { connect } from "react-redux";

import * as actions from "../actions";

class Payments extends Component {
  render() {
    //for some reason a ";" is added to the environment variables like process.env.REACT_APP_STRIPE_KEY
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY.replace(";", "")}
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions //store.dispatch(selectSong) is auto called by Redux!
)(Payments);
