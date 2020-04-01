/**
 * Use the CSS tab above to style your Element's container.
 */
import React from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from "@stripe/react-stripe-js";
import "./CardSectionStyles.css";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

function CardSection(props) {
  return (
    <React.Fragment>
      <label>
        First Name
        <input onChange={props.onInputChange} type="text" name="first_name" required />
      </label>
      <label>
        Last Name
        <input onChange={props.onInputChange} type="text" name="last_name" required />
      </label>
      <label>
        Card Number
        <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
      </label>
      <label>
        Expiry Date
        <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
      </label>
      <label>
        CVC
        <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
      </label>
      <label>
        Postal Code
        <input onChange={props.onInputChange} type="text" name="postal_code" maxLength="9" required />
      </label>
    </React.Fragment>
  );
}

export default CardSection;
