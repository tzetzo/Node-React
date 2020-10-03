const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid"); // Unique User Identifier - for generating unique string of chars
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const keys = require("../config/keys");

//AWS SDK for JavaScript in Node.js https://aws.amazon.com/sdk-for-node-js - API Documentation - S3 Service
const s3 = new AWS.S3({
  accessKeyId: keys.AWSaccessKeyId,
  secretAccessKey: keys.AWSsecretAccessKey,
});

module.exports = (app) => {
  app.get("/api/upload", requireLogin, requireCredits, async (req, res) => {
    // path used by the React app to get signed URL for uploading Image files to S3
    // test this endpoint @ localhost:5000/api/upload

    const key = `${req.user.id}/${uuidv4()}.jpeg`; // the name of the file in S3 - will be part of the signed URL

    s3.getSignedUrl(
      "putObject",
      {
        Bucket: "tzetzo-emaily-bucket",
        ContentType: "image/jpeg",
        Key: key,
        //ContentLength: 1024, //size of the body in bytes
      },
      (err, url) => {
        // signed URL returned
        res.send({ key, url });
      }
    );
  });
};
