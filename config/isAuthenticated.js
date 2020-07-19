const exjwt = require("express-jwt");

// Init the express-jwt middleware
const isAuthenticated = exjwt({
  secret: process.env.SERVER_SECRET,
  algorithms: ["RS256"],
});

module.exports = isAuthenticated;
