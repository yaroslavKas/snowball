"use strict";

const express = require("express");
const app = express();

app.use((req, res, next) => {

  console.log("use /");
  next();

});

app.all("/about", (req, res) => {

  res.send("It is about page")

});

app.all("/contact", (req, res) => {

  res.send("It us contact page")

});

app.use((req, res) => {
  res.status(404);
  res.send("Not Found");
});

app.listen(3000);