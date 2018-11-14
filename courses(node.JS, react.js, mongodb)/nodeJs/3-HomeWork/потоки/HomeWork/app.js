"use strict";

const fs = require("fs");
const { Transform } = require("stream");

const transformText = new Transform ({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toLowerCase().replace(/\s/g,""));
    callback();
  }
});

const readableStream = fs.createReadStream("./hello.txt", "utf8");
const writablrStream = fs.createWriteStream("./copyHello.txt");

let i = 1;
readableStream.on("data", () => {
  console.log(i++);
});

readableStream.pipe(transformText).pipe(writablrStream);

