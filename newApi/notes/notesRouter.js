const express = require("express");
const bodyParser = require("body-parser");

let notesRouter = express.Router();

module.exports = notesRouter;

notesRouter.use('/:id', (req, res, next) =>{
  req.id = Number(req.params.id);
  next();
});

notesRouter.use('/', bodyParser.json());


notesRouter.get('/', (req, res) => {
  let body = req.body;

  console.log(body);

  res.send(req.params);
});

notesRouter.post('/', (req, res) => {
  let body = req.body;

  console.log(body);

  res.status(201);
  res.send(req.body);
});

notesRouter.put('/:id', (req, res) => {
  let id = req.params.id;

  res.send(id);

});

notesRouter.delete('/:id', (req, res) => {
  let id = req.params.id;

  res.send(id)

});
