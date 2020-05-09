jest.setTimeout(30000);

require("../models/User");

const mongoose = require("mongoose");
const keys = require("../config/keys");

mongoose.Promise = global.Promise; //tell mongoose to use NodeJS implementation of Promise
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
});
