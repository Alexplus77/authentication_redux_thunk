const jwt = require("jsonwebtoken");
let { db } = require("../db/db");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

exports.news_list = (req, res) => {
  try {
    const token = req.headers["authorisation"].split(" ")[1];
    jwt.verify(token, "Very secret word", (err, decoded) => {
      if (decoded) {
        const { username, avatar } = db.users?.find(
          ({ id }) => id === decoded.id
        );
        axios
          .get(
            "https://newsapi.org/v2/top-headlines?country=ru&apiKey=0f8efc323e274fe4adf55603df7c344a"
          )
          .then(({ data }) => {
            const news = data.articles?.map((elem) => {
              return { id: uuidv4(), ...elem };
            });
            db.news = news;
            res
              .status(200)
              .send({ news: db?.news, user: { username, avatar } });
          })
          .catch((e) => console.log(e));
      }
    });
  } catch (e) {
    console.log(e);
  }
};
