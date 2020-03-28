const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  credits: { type: Number, default: 0 }
});

mongoose.model("users", userSchema); //create a Mongoose Model & "users" Collection if it does not exist -> 035 lesson

// we dont use module.exports here! Instead we access the Model through mongoose.model() - 036 lesson
