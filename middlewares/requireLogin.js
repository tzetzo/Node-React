module.exports = (req, res, next) => {
  if (!req.user) {
    res.status(401).send({ error: "You must login in!" }); //https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
  }

  next();
};
