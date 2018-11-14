"use strict";

const http = require("http");
const url = require('url');
const fs = require('fs');
const qs = require('querystring');



const server = http.createServer((req, res) => {

  let parserURL = url.parse(req.url, true);
  console.log(parserURL);
  console.log(req.url);



  if (parserURL.pathname === "/hello" && req.method.toUpperCase() === "GET") {
    fs.readFile("./index.html", "utf8", (err, data) => {
      data = data.replace("{name}", "User");

      res.end(data);
    });

  }
  if (parserURL.pathname === "/hello" && req.method.toUpperCase() === "POST") {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      let result = qs.parse(body);

      fs.readFile("./index.html", "utf8", (err, data) => {
        data = data.replace("{name}", result.name);
        res.end(data);
      });
    })
  }
});


server.listen(3000);