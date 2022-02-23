let { db } = require("../db/db");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
exports.news_item = (req, res) => {
  try {
    const token = req.headers["authorisation"].split(" ")[1];
    jwt.verify(token, "Very secret word", (err, decoded) => {
      if (decoded) {
        const { username, avatar } = db.users?.find(
          ({ id }) => id === decoded.id
        );
        const newsItem = db?.news.find(({ id }) => id === req.params.id);
        res.status(200).send({ newsItem, user: { username, avatar } });
      }
    });
  } catch (e) {
    res.status(404).send("error");
  }
};
