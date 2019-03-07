import Note from './noteSchema';

let noteController = {};

noteController.getAll = (req, res) => {
  Note.find({}, (err, notes) => {
    if (err) {
      res.send(err)
    } else {
      res.json(notes)
    }
  })
};

noteController.get = (req, res) => {
  Note.findById(req.param.id, (err, note) => {
    if (note) {
      res.json(note)
    } else {
      res.status(404);
      res.end()
    }
  })
};

noteController.post = (req, res) => {
  const note = {
    note: req.body.note,
  };

  Note.create(note, (err, note) => {
    if (err) {
      res.status(404);
      res.end()
    } else {
      res.status(201);
      res.set("Location", `${req.baseUrl}/${note.id}`);
      res.end();
    }
  });
};

noteController.put = (req, res) => {
  Note.findByIdAndUpdate(req.param.id, req.body, {runValidators: true}, (err, updateNote) => {
    if (updateNote) {
      res.send(`Note ${id} update`);
    } else if (err) {
      if (err.name === "ValidationError") {
        res.status(400);
      } else {
        res.status(404);
      }
      // res.end();
    } else {
      res.status(404);
      res.end();
    }
  });
};

noteController.delete = (req, res) => {
  const id = req.params.id;

  Note.findByIdAndDelete(id, (err, deletedNote) => {
    if (deletedNote) {
      res.send(`Note ${id} deleted`);
    } else {
      res.status(404);
      res.send(err);
    }
  });
};

module.exports = noteController;