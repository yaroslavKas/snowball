"use strict";

const express = require("express");
const fs = require("fs");

const app = express();

// app.use("/calc/:operation/:x/:y", (req, res, next) => {
//   let op = req.params["operation"];
//   let x = req.params["x"];
//   let y = req.params["y"];
//   res.send(`Hello ${op}!  ${x} ${y}`);
//   console.log(req.method);
//
//
//   next();
//
// });

app.use((req, res, next) => {

  let date= new Date;
  let time= [date.getHours(), date.getMinutes(), date.getSeconds()];
  let result = time.join("/");

  fs.appendFile("time.txt", `Time start: ${result}\n`, "utf8", (err) => {
    if (err) {
      throw err;
    }
    console.log(fs.readFileSync("time.txt", "utf8"));
  });

  next();
});

app.use((req, res, next) => {

  if (req.method === "GET") {
    res.send("GET");
  } else next();

});

app.use((req, res) => {
  res.send("Hello world");
});



app.listen(3000);