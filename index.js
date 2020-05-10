const express = require("express"); //commonJS module format as opposed to ES2015 module format(import, not supported by NodeJS)
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
// const bodyParser = require("body-parser"); //middleware for parsing JSON requests inside post route handlers
const keys = require("./config/keys");
require("./models/User"); //create the Mongoose Model with Schema on bootup
require("./models/Survey");
require("./services/passport"); //not assigning to a const since we only want it executed; 028 lesson; should be after the require for the User model since it uses it! 036 lesson
require("./services/cache");

//needed to test the /api/webhook & /api/surveys/webhooks endpoint from localhost
if (!["production", "ci"].includes(process.env.NODE_ENV)) {
  const ngrok = require("ngrok");
  (async function () {
    const url = await ngrok.connect(5000);
    console.log(url); //copy the generated URL & paste it in https://app.sendgrid.com/settings/mail_settings OR https://dashboard.stripe.com/test/webhooks/
  })();
}

//MongoDB Server connection
// mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//App
const app = express(); //the Express Server; we can have several different express apps/Servers

//Middleware
app.use(express.json()); //app.use(bodyParser.json());
//enable cookies through middleware cookie-session -> 41 lesson
//cookie-session middleware saves data in req.session; passport middleware looks for data in req.session -> 44 lesson
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey], //used to encrypt the cookie
  })
);
//use cookies through middleware passport
//tell passport to use cookies to handle authentication
app.use(passport.initialize());
app.use(passport.session());

//Route handlers
require("./routes/authRoutes")(app); //importing a function and immediately call it; 028 lesson
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

//if none of the above routes dont match use the following routes(serve the React app) 109 lesson:
if (["production", "ci"].includes(process.env.NODE_ENV)) {
  //serve up production assets like main.js & main.css:
  app.use(express.static("client/build")); //"npm run build" has to be executed inside the "client" folder when deploying in production

  const path = require("path");
  //if none of the above routes match, serve up the index.html file 109 lesson:
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  //behind the scenes nodeJS is used
  console.log(`app running on port ${PORT}`);
});
