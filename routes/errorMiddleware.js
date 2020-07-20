// Error handling middleware
module.exports = (err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    console.log(req);
    // Send the error rather than to show it on the console
    res.status(401).send(err);
  } else {
    next(err);
  }
};
