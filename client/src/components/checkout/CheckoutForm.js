import React, { useState } from "react";
import { connect } from "react-redux";
import {
  useStripe,
  useElements,
  CardNumberElement
} from "@stripe/react-stripe-js";
import axios from "axios";

import history from "../../history";
import CardSection from "./CardSection";
import { fetchUser } from "../../actions";

function CheckoutForm({ userId, fetchUser }) {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    postal_code: ""
  });

  const stripe = useStripe();
  const elements = useElements();

  const onInputChange = e =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmit = async event => {
    const { first_name, last_name, postal_code } = input;
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const res = await axios.post("/api/create-payment-intent");

    const result = await stripe.confirmCardPayment(res.data.clientSecret, {
      //confirm the PaymentIntent with data
      payment_method: {
        //https://stripe.com/docs/api/payment_methods/object
        card: elements.getElement(CardNumberElement),
        billing_details: {
          address: {
            postal_code
          },
          name: `${first_name} ${last_name}`
        }
      }
    });

    // console.log(result, elements.getElement(CardElement));

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
        alert("Payment successful!");
        fetchUser();
        history.push("/");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection onInputChange={onInputChange} />
      <button disabled={!stripe} className="btn">
        Pay $5.00
      </button>
    </form>
  );
}

const mapStateToProps = ({ auth }) => {
  if (auth) return { userId: auth._id };
  return {};
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(CheckoutForm);
