// require("dotenv").load(); //this doesn't work. look up why
require("dotenv").config();
const jwt = require("jsonwebtoken");

//make sure that the user is logged in
exports.loginRequired = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1]; //Bearer
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded) {
        return next();
      } else {
        return next({
          status: 401,
          message: "Please log in first"
        });
      }
    });
  } catch (error) {
    return next({ status: 401, message: "Please log in first" });
  }
};

//make sure we get the correct user
exports.ensureCorrectUser = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1]; //Bearer
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded && decoded.id === req.params.id) {
        return next();
      } else {
        return next({
          status: 401,
          message: "Unauthorized User"
        });
      }
    });
  } catch (error) {
    return next({
      status: 401,
      message: "Unauthorized User"
    });
  }
};
