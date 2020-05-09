const { clearCache } = require("../services/cache");

module.exports = async (req, res, next) => {
  await next(); //we wait for the route handler to successfully complete & then the code in this middleware is executed

  clearCache(req.user.id);
};
