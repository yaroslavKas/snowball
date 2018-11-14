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
    console.log(req);
    const note = {
      title: req.body.title,
      text: req.body.text,
    };

    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
        console.log('error');
      } else {
        res.send(result.ops[0]);
        console.log(result.ops[0]);
      }
    });
  });

  app.delete('/notes/:id', (req, res) => {
    const id =req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').remove(details , (err ,item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(`Note ${id} deleted`);
      }
    });
  });

  app.post('/signin', (req, res) => {
    console.log(req);
      let user_name =  req.body.email;
      let password = req.body.password;

    if(user_name === 'admin' && password === 'admin'){
      res.send('success');
    }
    else{
      res.send('Failure');
    }

    // db.collection('notes').insert(note, (err, result) => {
    //   if (err) {
    //     res.send({'error': 'An error has occurred'});
    //     console.log('error');
    //   } else {
    //     res.send(result.ops[0]);
    //     console.log(result.ops[0]);
    //   }
    // });
  })

};