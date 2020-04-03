const _ = require("lodash");
const Path = require("path-parser"); //3rd party
const { URL } = require("url"); //part of nodeJS
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys"); //get the Mongoose Model; should already be created; instead of directly require the Model from '/models/Survey'! necessary to prevent an issue if testing is introduced

module.exports = app => {
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
      //select all surveys by this user but exclude the 'recipients' field
      recipients: false
    });

    res.send(surveys);
  });

  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.send("Thanks for voting!");
  });

  app.post("/api/surveys/webhooks", (req, res) => {
    const p = Path.Path.createPath("/api/surveys/:surveyId/:choice"); //we want to extract surveyId & choice

    _.chain(req.body)
      .map(({ email, url }) => {
        // new URL(url).pathname ex output:   api/surveys/5c97247352bb73130cbb99a1/no
        const match = p.test(new URL(url).pathname); //ex output: { surveyId: '5c97247352bb73130cbb99a1', choice: 'yes' }
        if (match) {
          return { ...match, email };
        }
      })
      .compact()
      .uniqBy("email", "surveyId")
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId, //Mongo uses _id; we are looking for survey with that ID
            recipients: {
              $elemMatch: { email: email, responded: false } // at the same time we also look for a recipient with this email that hasnt responded yet!
            }
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true }, // update the recipient from the query($elemMatch)
            lastResponded: new Date()
          }
        ).exec(); //executes the query
      })
      .value();

    res.send({}); //guarantees that whoever makes the request will not be left hanging; SendGrid keeps sending the same event if we dont respond
  });

  app.post(
    //path used by the React app to create a survey
    "/api/surveys",
    requireLogin,
    requireCredits,
    async (req, res) => {
      const { title, subject, body, recipients } = req.body;
      const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients.split(",").map(email => ({ email })), //the () needed so JS doesnt confuse {} with function body {}
        _user: req.user.id,
        dateSent: Date.now()
      }); //create and save to the Db a document in the collection

      const mailer = new Mailer(survey, surveyTemplate(survey));

      try {
        await mailer.send(); //send all the e-mails
        await survey.save(); //save the survey in MongoDB

        if (req.user.credits > 0) req.user.credits -= 1;
        const user = await req.user.save();

        res.send(user);
      } catch (err) {
        res.status(422).send(err);
      }
    }
  );
};
