const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users"); //get the Mongoose Model; should already be created

//serializeUser is auto called by passport with the user whose profile was fetched;
passport.serializeUser((user, done) => {
  //user.id is the ID mongoDB assigns to the document representing the user and is put into the cookie for identifying the user
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user); //user added to the req object accessible in all route handlers as req.user!
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback", //should be included in "Authorized redirect URIs" in https://console.developers.google.com
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      //called after user gives permission to our app through Google OAUTH2; all the requested user details returned through "profile"
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //user already in DB
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user)); //create and savee to the Db a document in the collection
        }
      });
    }
  )
);
