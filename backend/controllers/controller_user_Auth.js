const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let { db } = require("../db/db");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
exports.controller_user_Auth = (req, res) => {
  try {
    const { id, username, password, avatar } = db.users.find(
      ({ username }) => username === req.body.username
    );
    bcrypt.compare(req.body.password, password, (err, result) => {
      err && res.status(400).send("Err, not found");
      if (result) {
        const token = jwt.sign({ id }, "Very secret word", {
          expiresIn: "1h",
        });
        axios
          .get(
            "https://newsapi.org/v2/top-headlines?country=ru&apiKey=0f8efc323e274fe4adf55603df7c344a"
          )
          .then(({ data }) => {
            const newsList = data.articles.map((elem) => {
              return { id: uuidv4(), ...elem };
            });
            db.news = newsList;
            res
              .status(200)
              .send({ token: token, news: db.news, username, avatar });
          })
          .catch((e) => console.log(e));
      }
    });
  } catch (e) {
    res.status(404).send(e);
  }
};
