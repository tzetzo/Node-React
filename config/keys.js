if (process.env.NODE_ENV === "production") {
  //auto set by Heroku to "production"
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
