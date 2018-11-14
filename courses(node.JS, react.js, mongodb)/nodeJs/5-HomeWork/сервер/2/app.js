"use strict";

const http = require("http");
const url = require('url');
const fs = require('fs');



const server = http.createServer((req, res) => {

  let parserURL = url.parse(req.url, true);
  console.log(req.url);
  console.log(parserURL);


  if (parserURL.href === "/style.css") {

    res.setHeader("Content-Type", "text/css");
    const css = fs.readFileSync("./style.css", "utf8", );

    res.write(css);
  }

  fs.readFile("./index.html", "utf8", (error, data) => {
    let sum = "";

    if ( String(parserURL.query.z) === "*") {

      let result =  String(parserURL.query.x * parserURL.query.y);
      sum = data.replace("{result}", result);

    } else if (parserURL.query.z === "-") {

      let result =  String(parserURL.query.x - parserURL.query.y);
      sum = data.replace("{result}", result);

    } else {
      res.statusCode = 404;
      res.statusMessage = "Not Found!!.";
    }

    res.end(sum);
  });

});


server.listen(3000);