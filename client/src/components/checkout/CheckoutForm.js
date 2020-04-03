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
import { updateUserCredits } from "../../actions";
import Progress from "../Progress";

function CheckoutForm({ userId, updateUserCredits }) {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    postal_code: ""
  });

  const [cardInfo, setCardInfo] = useState({
    cardNumber: false,
    cardExpiry: false,
    cardCvc: false
  });

  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const onInputChange = e =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const onCardInfoChange = e =>
    e.complete
      ? setCardInfo({ ...cardInfo, [e.elementType]: true })
      : setCardInfo({ ...cardInfo, [e.elementType]: false });

  const handleSubmit = async event => {
    setProcessing(true);

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
      setProcessing(false);
      // Show error to your customer (e.g., insufficient funds)
      alert(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
        updateUserCredits();
        setProcessing(false);
        history.push("/");
      }
    }
  };

  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit}
        className="container"
        style={{ marginTop: "3rem" }}
      >
        <CardSection
          onInputChange={onInputChange}
          onCardInfoChange={onCardInfoChange}
        />
        <button
          disabled={
            !stripe ||
            !input.first_name ||
            !input.last_name ||
            !input.postal_code ||
            !cardInfo.cardNumber ||
            !cardInfo.cardExpiry ||
            !cardInfo.cardCvc
          }
          className="btn"
          style={{ marginTop: "3rem", width: "100%" }}
        >
          Pay $5.00
        </button>
      </form>
      {processing && (
        <Progress
          title="Please wait ..."
          message="We are processing your payment"
        />
      )}
    </React.Fragment>
  );
}

const mapStateToProps = ({ auth }) => {
  if (auth) return { userId: auth._id };
  return {};
};

export default connect(
  mapStateToProps,
  { updateUserCredits }
)(CheckoutForm);
