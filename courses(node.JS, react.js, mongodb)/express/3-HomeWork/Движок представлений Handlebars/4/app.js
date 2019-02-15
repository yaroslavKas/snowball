"use strict";

const hbs = require('hbs');
const express = require('express');
const getTime = require('./helpers/getTime');
const menu = require('./helpers/menu');
const footer = require('./helpers/footer');
// const bodyParser = require('body-parser');
// const qs = require('querystring');
// const fs = require('fs');
const app = express();


hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getTime", getTime);
hbs.registerHelper("menu", menu);
hbs.registerHelper("footer", footer);

app.set('view engine','hbs');

app.get("/", (req, res) => {

  res.render("main.hbs", {
    persons: [
      {name: 'Tom', age: 27, children: 1},
      {name: 'Sam', age: 20}
    ],
    title: "My menu main",
    titleFooter: "My footer"
  });
});

app.get("/hello", (req, res) => {

  res.render("hello.hbs", {
    title: "My menu",
    titleFooter: "My footer"
  });
});

app.listen(3000);


