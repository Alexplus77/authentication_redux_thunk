const express = require("express");
const router = express.Router();
const { registration } = require("../controllers/controller_registrationPost");
const { controller_user_Auth } = require("../controllers/controller_user_Auth");
router.post("/registration", registration);
router.post("/auth", controller_user_Auth);

module.exports = { router };
