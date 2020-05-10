if (process.env.NODE_ENV === "production") {
  //auto set by Heroku to "production"
  module.exports = require("./prod");
} else if (process.env.NODE_ENV === "ci") {
  console.log("Travis-CI test from else if: ", process.env.NODE_ENV);
  module.exports = require("./ci");
} else {
  console.log("Travis-CI test from else: ", process.env.NODE_ENV);
  module.exports = require("./dev");
}
