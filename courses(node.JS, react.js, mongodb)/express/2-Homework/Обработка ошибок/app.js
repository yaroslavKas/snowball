"use strict";

const express = require("express");

const a = "this is variable = a";

const app = express();

app.use((req, res, next) => {

  console.log("Start");
  next()

});

app.use("/qwe", (req, res, next) => {

  throw new Error("other");


  // console.log(a);
  // // res.send("Hello");
  // console.log(b);
  // next()

});


app.use((err, req, res, next) => {

  if (err.name === "ReferenceError") {
    console.log(err);
    res.status(404);
    res.send(`Error: ${err.name}`);
  } else {
    next(err);
  }

});

app.use((err, req, res, next) => {

  if (res.headersSent) {
    return next(err);
  }

  res.status(500);
  res.send(`Error other: ${err.message}`);
});


app.listen(3000);