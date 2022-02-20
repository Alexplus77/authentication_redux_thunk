const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { router } = require("./routers/routers");

const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
