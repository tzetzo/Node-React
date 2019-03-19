const express = require("express"); //commonJS module format as opposed to ES2015 module format(import, not supported by NodeJS)
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser"); //middleware for parsing JSON requests inside post route handlers
const keys = require("./config/keys");
require("./models/User"); //create the Mongoose Model with Schema
require("./services/passport"); //not assigning to a const since we only want it executed; 028 lesson

//MongoDB Server connection
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

//App
const app = express(); //the Express Server; we can have several different express apps/Servers

//Middleware
app.use(bodyParser.json());
//enable cookies through middleware cookie-session
//cookie-session middleware saves data in req.session; passport middleware looks for data in req.session
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey] //used to encrypt the cookie
  })
);
//use cookies through middleware passport
app.use(passport.initialize());
app.use(passport.session());

//Route handlers
require("./routes/authRoutes")(app); //importing a function and immediately call it; 028 lesson
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); //"npm run build" has to be executed inside the "client" folder when deploying in production

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  //behind the scenes nodeJS is used
  console.log("app running on port 5000");
});
