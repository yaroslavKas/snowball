"use strict";

const hbs = require('hbs');
const express = require('express');
// const getTime = require('./helpers/getTime');
// const createList = require('./helpers/createList');
// const bodyParser = require('body-parser');
// const qs = require('querystring');
// const fs = require('fs');
const app = express();


hbs.registerPartials(__dirname + "/views/partials");
// hbs.registerHelper("getTime", getTime);

// hbs.registerHelper("createList", createList);

app.set('view engine','hbs');

app.get("/", (req, res) => {

  res.render("main.hbs", {
    persons: [
      {name: 'Tom', age: 27, children: 1},
      {name: 'Sam', age: 20}
    ]
  });
});

app.get("/hello", (req, res) => {

  res.render("hello.hbs", {
    names: ['Tom1', 'Tom2', 'Tom3']
  });
});

app.listen(3000);


