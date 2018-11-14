"use strict";

// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

const math = (firstArg = 0, operation = "+", lastArg = 0) => {
  let sum = null;


  if (Number(firstArg) && Number(lastArg)) {
    if (String(operation) === "-") {
      sum = (firstArg - lastArg);
    } else {
      sum = (Number(firstArg) + Number(lastArg));
    }

  } else {
    console.log('Parameter is not Number');
  }

  console.log("sum", sum);
};

math(process.argv[2], process.argv[3], process.argv[4]);



