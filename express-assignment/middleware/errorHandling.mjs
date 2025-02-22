const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Logs the error stack trace

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;
