"use strict";

const fs = require("fs");

const riderFiles = (array) => {
  let arrayValue = [];

  for (let i = 2; i < array.length; i++ ) {
    let valItem = fs.readFileSync(array[i], "utf8",);
    arrayValue.push(valItem);
  }

  fs.appendFile(array[2], arrayValue, "utf8", (err) => {
    if (err) {
      throw err;
    }
    console.log("result", fs.readFileSync(array[2], "utf8"));
  });
};

riderFiles(process.argv);