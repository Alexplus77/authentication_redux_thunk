const express = require("express");
const router = express.Router();
const { registration } = require("../controllers/controller_registrationPost");
const { controller_user_Auth } = require("../controllers/controller_user_Auth");
const { news_list } = require("../controllers/controller_news_list");
router.post("/registration", registration);
router.post("/auth", controller_user_Auth);
router.get("/news", news_list);

module.exports = { router };
