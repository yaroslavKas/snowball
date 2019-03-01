"use strict";

import express from 'express';
import notesRouter from './notes/notesRouter';

const app = express();
const port = 8080;

// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use((req, res, next) => {

  let { method, url } = req;
  console.log(`${method} ${url}`);
  next();

});

// app.use(express.static(__dirname + "/public"));
app.use("/notes", notesRouter);


app.use((req, res, next) => {

  res.status(404);
  res.send(`Error: gfgdfgdfgdfgdfgdfg`);
  // if (err.name === "ReferenceError") {
  //   console.log(err);
  //
  //   res.status(404);
  //   res.send(`Error: ${err.name} gfgdfgdfgdfgdfgdfg`);
  //
  // } else {
  //   next(err);
  // }
  next();
});

app.use((err, req, res, next) => {

  if (res.headersSent) {
    next(err);

  } else {
    res.status(500);
    res.send(`Error other: ${err.message} my error`);
  }

});


app.listen(port, () => {
  console.log(`We are live on ${port}`);
});

