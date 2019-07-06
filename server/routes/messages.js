const express = require("express");
const router = express.Router({ mergeParams: true }); //mergeParams allows access to ID of the router

const { createMessage } = require("../handlers/messages");

//prefix this with /api/users/:id/messages
//router.route to make sure to make all routes start with '/'
router.route("/").post(createMessage);

module.exports = router;
