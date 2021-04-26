const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("hello world");
});

app.listen(PORT);