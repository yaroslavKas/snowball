"use strict";

const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res, next) => {

  res.send('Hello World!');
  next();

});

app.get("/hello", (req, res, next) => {

  res.send("Hello Guest!");
  next();

});

app.get("/hello/tom", (req, res) => {

  res.send("Hello Tom!");
});


app.listen(3000);