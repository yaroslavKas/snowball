"use strict";

const http = require("http");
const url = require('url');
const fs = require('fs');



const server = http.createServer((req, res) => {

  res.setHeader("Content-Type", "text/html");

  let parserURL = url.parse(req.url, true);
  console.log(req.url);
  console.log(parserURL);


  if (parserURL.href === "/style.css") {
    res.setHeader("Content-Type", "text/css");
    console.log('css');

    const css = fs.readFileSync("./style.css", "utf8", );

    res.write(css);
  }




  fs.readFile("./index.html", "utf8", (error, data) => {

    res.end(data);

  });

});


server.listen(3000);