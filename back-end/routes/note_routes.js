import mongodb from 'mongodb';

const ObjectID = mongodb.ObjectID;

module.exports = (app, db) => {


  // app.get('/notes/:id', (req, res) => {
  //   const id = req.params.id;
  //   const details = {'_id': new ObjectID(id)};
  //   db.collection('notes').findOne(details, (err, item) => {
  //     if (err) {
  //       res.send({'error': 'An error has occurred'});
  //     } else {
  //       res.send(item);
  //     }
  //   })
  // });

  app.get('/notes', (req, res) => {

    db.collection('notes').find({}).toArray((err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(result);
      }
    });
  });

  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};

    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  app.post('/notes', (req, res) => {
    const note = {
      title: req.body.title,
      test: req.body.text,
    };



    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(result);
      }
      db.close();
    });


  });
  // app.delete('/notes/:id', (req, res) => {
  //   db.deleteNote(req.params.id).then(data => res.send(data));
  // })

};