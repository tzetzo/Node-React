## Install

1. Make sure to run "npm install" in "/" AND "/client" folders!

2. Webhook for Stripe(https://dashboard.stripe.com/test/webhooks/) has to be set up;
3. Webhook for SendGrid (https://app.sendgrid.com/settings/mail_settings) has to be set up;

4. Need to create /config/dev.js with following content :

module.exports = {
  googleClientID:
    "...",
  googleClientSecret: "...",
  FACEBOOK_APP_ID: "...",
  FACEBOOK_APP_SECRET: "...",
  mongoURI:
    "...",
  cookieKey: "...",
  stripePublishableKey: "...",
  stripeSecretKey: "...",
  sendGridKey:
    "...",
  redirectDomain: "http://localhost:5000"
};
