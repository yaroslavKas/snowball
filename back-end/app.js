import express from 'express';
import mongodb  from 'mongodb';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './etc/config';

const port = 8080;

// Initialization of express application
const app = express();
const MongoClient = mongodb.MongoClient;

// Using bodyParser middleware
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(cors({ origin: "*"}));


// const server = app.listen(8080, () => {
//   console.log(`Server is up and running on port ${serverPort}`);
// })
MongoClient.connect(db.url, (err, database) => {
  // const database = client.db();

  if (err) return console.log(err);
  require('./routes')(app, database);

  app.listen(port, () => {
    console.log(`We are live on ${port}`);
  })
});