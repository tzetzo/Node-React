const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");

const User = mongoose.model("users");

//needed to test the /api/webhook endpoint from localhost
if (process.env.NODE_ENV !== "production") {
  const ngrok = require("ngrok");
  (async function() {
    const url = await ngrok.connect(5000);
    console.log(url);
  })();
}

module.exports = app => {
  //https://github.com/stripe-samples/accept-a-card-payment/blob/master/using-webhooks/server/node/server.js#L37-L40
  app.post("/api/create-payment-intent", requireLogin, async (req, res) => {
    //const { items, currency } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      //https://stripe.com/docs/api/payment_intents/create
      amount: 500, //calculateOrderAmount(items),
      currency: "usd", //currency
      description: "$5 for 5 email credits",
      metadata: { userId: req.user.id } //include the user ID so that we can update the user when payment is complete
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      //publishableKey: keys.stripePublishableKey,
      clientSecret: paymentIntent.client_secret
    });
  });

  // Expose a endpoint as a webhook handler for asynchronous events.
  // Configure your webhook in the stripe developer dashboard
  // https://dashboard.stripe.com/test/webhooks
  app.post("/api/webhook", async (req, res) => {
    let data, eventType;

    // Check if webhook signing is configured.
    if (process.env.STRIPE_WEBHOOK_SECRET) {
      // Retrieve the event by verifying the signature using the raw body and secret.
      let event;
      let signature = req.headers["stripe-signature"];
      try {
        event = stripe.webhooks.constructEvent(
          req.rawBody,
          signature,
          process.env.STRIPE_WEBHOOK_SECRET
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`);
        return res.sendStatus(400);
      }
      data = event.data;
      eventType = event.type;
    } else {
      // Webhook signing is recommended, but if the secret is not configured in `config.js`,
      // we can retrieve the event data directly from the request body.
      data = req.body.data;
      eventType = req.body.type;
    }

    if (eventType === "payment_intent.succeeded") {
      // Funds have been captured
      // Fulfill any orders, e-mail receipts, etc
      // To cancel the payment after capture you will need to issue a Refund (https://stripe.com/docs/api/refunds)
      console.log("💰 Payment captured!");

      User.findByIdAndUpdate(req.body.data.object.metadata.userId, {
        $inc: { credits: 5 }
      }).exec();
    } else if (eventType === "payment_intent.payment_failed") {
      console.log("❌ Payment failed.");
    }
    res.sendStatus(200);
  });
};
