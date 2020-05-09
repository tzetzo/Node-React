const Buffer = require("safe-buffer").Buffer;
const Keygrip = require("keygrip");
const keys = require("../../config/keys");
const keygrip = new Keygrip([keys.cookieKey]);

module.exports = (user) => {
  //create session & session.sig to be used to set Cookies for auth in our tests
  const sessionObject = {
    passport: {
      user: user._id.toString(), //toString() required due to how mongo models are structured
    },
  };

  const session = Buffer.from(JSON.stringify(sessionObject)).toString("base64");

  const sig = keygrip.sign("express:sess=" + session);

  return { session, sig };
};
