"use strict";

const express = require("express");

const app = express();

app.get("/name", (req, res) => {
  res.send("Yaroslav");
});

app.listen(3000);