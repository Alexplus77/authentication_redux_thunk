let { db } = require("../db/db");
exports.news_item = (req, res) => {
  try {
    const newsItem = db?.news.find(({ id }) => id === req.params.id);
    res.status(200).send(newsItem);
  } catch (e) {
    res.status(404).send("error");
  }
};
