const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
  title: String, //field
  subject: String, //field
  body: String,
  recipients: [RecipientSchema], //sub document collection
  fromEmail: String,
  imageUrl: String,
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" }, //_ shows this is a relationship property; associates the document to a user from the "User" Model;
  dateSent: Date,
  lastResponded: { type: Date, default: null },
});

mongoose.model("surveys", surveySchema); //create a Mongoose Model & "surveys" Collection

// we dont use module.exports here! Instead we access the Model through mongoose.model() - 036 lesson
