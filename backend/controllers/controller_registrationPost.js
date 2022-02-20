const { db } = require("../db/db");
const { v4: uuidv4 } = require("uuid");
exports.registration = (req, res) => {
  try {
    db.users.push({ ...req.body, id: uuidv4() });
    res.status(200).send("ok");
  } catch (e) {
    res.status(404).send("error from server");
  }
};
