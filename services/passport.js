const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users"); //get the Mongoose Model; should already be created; do not require the Model directly but use mongoose.model() instead!

//serializeUser is auto called by passport with the user whose profile was fetched;
//used to generate the user ID used to generate the Cookie
passport.serializeUser((user, done) => {
  //user.id is the ID mongoDB assigns to the document representing the user and is put into the cookie for identifying the user; 039 lesson
  done(null, user.id);
});
//used to extract the user ID from the Cookie; cookie-session saves the cookie object under req.session as {"passport":{"user":"87ifx8oq3"}}
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user); //user added to the req object accessible in all route handlers as req.user!
  });
});

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.FACEBOOK_APP_ID,
      clientSecret: keys.FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback", //should NOT be included in "Valid OAuth Redirect URIs" for the dev environment - it includes it by default for localhost! https://developers.facebook.com/apps/2939235592804755/fb-login/settings/
      proxy: true, //means we trust Heroku Proxy; otherwise we get redirect mismatch error (50 lesson)
      profileFields: ["email", "name", "displayName"],
    },
    async (accessToken, refreshToken, profile, done) => {
      //called after user gives permission to our app through Facebook OAUTH2; all the requested user details returned through "profile"

      const existingUser = await User.findOne({ facebookId: profile.id });

      if (existingUser) {
        //user already in DB
        return done(null, existingUser); //first argument is error
      }

      const user = await new User({ facebookId: profile.id }).save(); //create and save to the DB a document in the collection
      done(null, user);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback", //should be included in "Authorized redirect URIs" in https://console.developers.google.com
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      //called after user gives permission to our app through Google OAUTH2; all the requested user details returned through "profile"

      // User.findOne({ googleId: profile.id }).then(existingUser => {
      //   if (existingUser) {
      //     //user already in DB
      //     done(null, existingUser);
      //   } else {
      //     new User({ googleId: profile.id })
      //       .save()
      //       .then(user => done(null, user)); //create and savee to the Db a document in the collection
      //   }
      // });

      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        //user already in DB
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save(); //create and save to the Db a document in the collection
      done(null, user);
    }
  )
);
