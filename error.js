module.exports = function RandomKeyError(message) {
  Error.captureStackTrace(this, this.constructor);
  this.name = "[Random Keys Error]";
  this.message = message;

};

require('util').inherits(module.exports, Error);