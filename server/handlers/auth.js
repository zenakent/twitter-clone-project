const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = function() {};

exports.signup = async function(req, res, next) {
  try {
    //create a user
    let user = await db.User.create(req.body);
    let { id, username, profileImageUrl } = user;
    //create a token(signing a token)
    let token = jwt.sign(
      {
        id,
        username,
        profileImageUrl
      },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token
    });
  } catch (error) {
    //see what kind of error
    //if it is a certain eror
    //respond with username/email already taken
    //if a validation fails
    if (error.code === 11000) {
      error.message = "Sorry, that username/email has been taken already";
    }
    //otherwise just send back a generic 404
    return next({
      status: 404,
      message: error.message
    });
  }
};
