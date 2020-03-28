const passport = require("passport");

module.exports = app => {
  app.get(
    //path used by the React app to login the user through Google
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    //path used by the google strategy used by passport
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys"); //say to the React app to load this route
    }
  );

  app.get(
    //path used by the React app to login the user through Facebook
    "/auth/facebook",
    passport.authenticate("facebook", {
      // scope: [ "email"]
    })
  );

  app.get(
    //path used by the Facebook strategy used by passport
    "/auth/facebook/callback",
    passport.authenticate("facebook"),
    (req, res) => {
      res.redirect("/surveys"); //say to the React app to load this route
    }
  );

  app.get("/api/logout", (req, res) => {
    //path used by the React app to logout user
    req.logout(); //passport deletes the cookie; passport auto attaches the logout property to the req object
    res.redirect("/"); //say to the React app to load this route
  });

  app.get("/api/current_user", (req, res) => {
    //path used by the React app to figure out if the user is logged in
    res.send(req.user); //passport auto attaches the user property to the req object
  });
};
