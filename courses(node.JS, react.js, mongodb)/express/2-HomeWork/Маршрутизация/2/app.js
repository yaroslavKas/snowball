"use strict";

const express = require("express");
const app = express();

app.use((req, res, next) => {


  console.log("use /");
  next();

});

app.use("/sum/:first?/:second?/:operation?", (req, res, next) => {

  let x = req.params["first"] || 0;
  let y = req.params["second"] || 0;
  let operation = req.params["operation"] || 'add';
  let sum = Number(x) + Number(y);
  let sub = Number(x) - Number(y);



    if (operation === "add") {
      res.send(`${x} + ${y} = ${sum}`)
    }
    else if (operation === "sub") {
      res.send(`${x} - ${y} = ${sub}`)
    }
    else {
      next()
    }


});


app.use((req, res) => {
  res.status(400);
  res.send("Not operation");
});

app.listen(3000);


// "use strict";
//
// // process.argv.forEach((val, index) => {
// //   console.log(`${index}: ${val}`);
// // });
//
// const math = (firstArg = 0, operation = "+", lastArg = 0) => {
//   let sum = null;
//
//
//   if (Number(firstArg) && Number(lastArg)) {
//     if (String(operation) === "-") {
//       sum = (firstArg - lastArg);
//     } else {
//       sum = (Number(firstArg) + Number(lastArg));
//     }
//
//   } else {
//     console.log('Parameter is not Number');
//   }
//
//   console.log("sum", sum);
// };
//
// math(process.argv[2], process.argv[3], process.argv[4]);



