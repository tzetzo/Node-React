if (process.env.NODE_ENV === "production") {
  //auto set by Heroku to "production"
  module.exports = require("./prod");
} else if (process.env.NODE_ENV === "ci") {
  //for our Travis-CI environment
  module.exports = require("./ci");
} else {
  module.exports = require("./dev");
}
