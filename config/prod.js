module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN,
  redisURL: process.env.REDIS_URL, //https://devcenter.heroku.com/articles/heroku-redis#provisioning-the-add-on
};
