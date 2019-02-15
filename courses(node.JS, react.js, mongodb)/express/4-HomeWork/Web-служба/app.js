"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use("/api", bodyParser.json());

app.use((req, res, next) => {
  let { method, url } = req;
  console.log(`${method} ${url}`);

  next();
});


app.get("/api/resourceName", (req, res) => {

  res.json(["resource1", "resource2"]);
});

app.get("/api/resourceName/:id", (req, res) => {
  let id = req.params.id;
  console.log(`id: ${id}`);

  res.json("resource");
});

app.post("/api/resourceName", (req, res) => {
  let body = req.body;
  console.log("body:");
  console.log(body);

  res.status(201);
  res.set("Location", `/resourceName/3`);
  res.end();
});

app.put("/api/resourceName/:id", (req, res) => {
  let id = req.params.id;
  console.log(`id: ${id}`);

  let body = req.body;
  console.log("body:");
  console.log(body);

  res.end();
});

app.delete("/api/resourceName/:id", (req, res) => {
  let id = req.params.id;
  console.log(`id: ${id}`);

  res.end();
});

app.listen(3000);


