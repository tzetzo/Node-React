const express = require("express"); //commonJS module format as opposed to ES2015 module format(import, not supported by NodeJS)
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  //behind the scenes nodeJS is used
  console.log("app running on port 5000");
});
