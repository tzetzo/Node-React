const mongoose = require("mongoose");

const User = mongoose.model("users");

module.exports = (credits) => {
  return new User({ credits }).save();
};
