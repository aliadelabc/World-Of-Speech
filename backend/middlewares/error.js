const ErrorResponse = require("../utils/errorResponse");

const notFound = (req, res, next) => {
  res.status(404);
  next(new Error(`Not Found - ${req.originalUrl}`));
};

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  //   Mongoose bad ObjectId
  if (err.name === "CastError") {
    const message = `Resources not found with the id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  //   Mongoose Validation Error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    error: error.message || "Server Error",
    status: false,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

// module.exports = errorHandler;
exports.notFound = notFound;
exports.errorHandler = errorHandler
