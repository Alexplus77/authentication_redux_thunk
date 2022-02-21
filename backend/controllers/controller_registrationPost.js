const { db } = require("../db/db");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const saltBcrypt = 10;

exports.registration = (req, res) => {
  const hashPassword = bcrypt.hashSync(req.body.password, saltBcrypt);
  try {
    db.users.push({
      ...req.body,
      password: hashPassword,
      id: uuidv4(),
      avatar: "https://1avatara.ru/pic/men/man0003.jpg",
    });
    res.status(200).send("ok");
  } catch (e) {
    res.status(404).send("error from server");
  }
};
