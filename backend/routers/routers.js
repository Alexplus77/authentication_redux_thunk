const express = require("express");
const router = express.Router();
const { registration } = require("../controllers/controller_registrationPost");
router.post("/registration", registration);

module.exports = { router };
