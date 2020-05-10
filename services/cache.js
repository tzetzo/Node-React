// this code is entirely used for our caching with Redis integration
// we require this file in index.js
// we use the cache method in surveyRoutes.js
// we use the clearCache method in clearCache middleware
const mongoose = require("mongoose");
const redis = require("redis");
const util = require("util");
const keys = require("../config/keys");

const client = redis.createClient(keys.redisURL);
client.hget = util.promisify(client.hget);

mongoose.Query.prototype.cache = function (options = {}) {
  //will be set only for the currently executing query that called this method
  this.useCache = true;
  this.key = JSON.stringify(options.key || ""); // will be used as top level key

  return this; // make the method chainable
};

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = async function () {
  if (!this.useCache) {
    return exec.apply(this, arguments);
  }

  const subkey = JSON.stringify({
    ...this.getQuery(),
    collection: this.mongooseCollection.name,
  });

  // See if we have a value for "key & subkey" in redis
  const cacheValue = JSON.parse(await client.hget(this.key, subkey));

  // If we do, return it;
  // convert it to mongoose model based object as this is what the exec method expects
  if (cacheValue) {
    return cacheValue.length
      ? cacheValue.map((doc) => new this.model(doc))
      : new this.model(cacheValue);
  }

  // Otherwise, issue the query and store the result in redis
  const result = await exec.apply(this, arguments);

  client.hset(this.key, subkey, JSON.stringify(result)); //expire cached data after 10 seconds

  return result;
};

// used in surveyRoutes to clear caches data in Redis
module.exports = {
  clearCache(key) {
    client.del(JSON.stringify(key));
  },
};
