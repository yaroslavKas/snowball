"use strict";

const express = require("express");

const app = express();

app.use("/calc/:operation/:x/:y", (req, res) =>{
  let op = req.params["operation"];
  let x = req.params["x"];
  let y = req.params["y"];
  res.send(`Hello ${op}!  ${x} ${y}`);

});


app.listen(3000);