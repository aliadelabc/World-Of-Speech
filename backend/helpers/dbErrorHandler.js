"use strict";

/**
 * Get the erroror message from error object
 */
exports.errorHandler = (error) => {
  let message = "";

  if (error.code) {
    message = "Something went wrong";
  } else {
    for (let errorName in error.errors) {
      if (error.errors[errorName].message)
        message = error.errors[errorName].message;
    }
  }

  return message;
};
