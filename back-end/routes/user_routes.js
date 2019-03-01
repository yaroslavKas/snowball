// import mongodb from 'mongodb';

module.exports = (app, db) => {


  app.get('/', (req, res) => {

  });

  app.get('/listuser', (req, res) => {

    db.collection('users').find({}).toArray((err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(result);
      }
    });
  });

  app.post('/signin', (req, res) => {

    const user = {
      email:  req.body.email,
      password: req.body.password,
    };

    // if(user_name === 'admin' && password === 'admin'){
    //   res.send('success');
    // }
    // else{
    //   res.send('Failure');
    // }

    db.collection('users').insert(user, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
        console.log('error');
      } else {
        res.send(req.body);
        console.log(req.body);
      }
    });
  })

};