const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

app.use(express.json());
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ success: true, message: "server working" });
});

module.exports = app;
