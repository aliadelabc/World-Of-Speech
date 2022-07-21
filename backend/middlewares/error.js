//intializing error response class to send error message to client-side
const ErrorResponse = require("../utils/errorResponse");

//send 404 | Not Found message to client-side
const notFound = (req, res, next) => {
  res.status(404);
  next(new Error(`Not Found - ${req.originalUrl}`));
};

//send 500 | Server Error message to client-side
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  res.status(error.statusCode || 500).json({
    error: error.message || "Server Error",
    status: false,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

//exporting middlewares to be used in server.js
exports.notFound = notFound;
exports.errorHandler = errorHandler;
