"use strict";

const http = require("http");
const fs = require('fs');



const server = http.createServer((req, res) => {

  res.setHeader("Content-Type", "text/plain");

  fs.createReadStream("./text.txt").pipe(res);

});


server.listen(3000);