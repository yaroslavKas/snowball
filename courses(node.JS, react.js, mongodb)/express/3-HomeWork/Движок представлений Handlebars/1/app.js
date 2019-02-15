"use strict";

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const hds = require('hbs');
const qs = require('querystring');

app.set('view engine','hbs');

app.get("/:max?/:min?", (req, res) => {

  let max = req.params["max"] || 0;
  let min = req.params["min"] || 0;

  res.render("hello.hbs", {
    max: max,
    min: min
  });
});

app.listen(3000);


