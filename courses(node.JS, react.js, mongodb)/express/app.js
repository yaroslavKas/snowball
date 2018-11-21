"use strict";

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const qs = require('querystring');

app.use("/", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));

app.get("/user", (req, res) => {
  fs.readFile("./index.html", "utf8", (err, data) => {
    data = data.replace("{name}", "User");

    res.end(data);
  });
});

app.post("/user", (req, res) => {
  console.log(req.body);

  let name = req.body.name;
  let age = req.body.age;
  res.send(`Name: ${name}, Age: ${age}`);
});

app.listen(3000);


