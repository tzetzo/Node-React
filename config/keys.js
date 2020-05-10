if (process.env.NODE_ENV === "production") {
  //auto set by Heroku to "production"
  module.exports = require("./prod");
} else if (process.env.NODE_ENV === "ci") {
  module.exports = require("./ci.js");
} else {
  module.exports = require("./dev.js");
}
