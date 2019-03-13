const express = require("express"); //commonJS module format as opposed to ES2015 module format(import, not supported by NodeJS)
const app = express(); //the Express Server; we can have several different express apps/Servers

app.get("/", (req, res) => {
  //route handler; called any time a request to "/" is made; req & res are objects
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  //behind the scenes nodeJS is used
  console.log("app running on port 5000");
});
