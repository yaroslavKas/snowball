module.exports = (app, db) => {

  app.post('/notes', (req, res) => {
    console.log(req.body);
    const note = { title: req.body.title, test: req.body.text, param: req.body.clon };
    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred'});
      } else {
        res.send(result.ops[0]);
      }
      // db.close();
    });
  });
  // app.delete('/notes/:id', (req, res) => {
  //   db.deleteNote(req.params.id).then(data => res.send(data));
  // })
  // app.get('/notes', (req, res) => {
  //   db.listNotes().then(data => res.send(data));
  // });
};