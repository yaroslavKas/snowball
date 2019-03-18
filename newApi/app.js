"use strict";

import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import mongoStore from 'connect-mongo';
import noteRouter from './routers/notes/noteRouter';
import userRouter from './routers/users/userRouter';
import cookieParser from 'cookie-parser';
import config from './config';

mongoose.connect('mongodb://localhost:27017/newApi', {useNewUrlParser: true, useCreateIndex: true})
  .then(() => {
      console.log('Database is connected')
    },
    err => {
      console.log('Can not connect to the database' + err)
    });

const app = express();
const port = 8080;
const MongoStore = mongoStore(session);

// const secretValue = 'secret value';
//
app.use(cookieParser());
// app.use(session({secret: "Shh, its a secret!"}));




app.use(
  session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: false },
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);

// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use((req, res, next) => {
//
//   let { method, url } = req;
//   console.log(`${method} ${url}`);
//   next();
//
// });

// app.use(express.static(__dirname + "/public"));
app.use(cors({origin: "*"}));
// app.use(bodyParser.urlencoded({ extended: true}));

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use("/auth", userRouter);
app.use("/notes", noteRouter);


// app.use((req, res, next) => {
//
//   res.status(404);
//   res.send(`Error: gfgdfgdfgdfgdfgdfg`);
//   if (err.name === "ReferenceError") {
//     console.log(err);
//
//     res.status(404);
//     res.send(`Error: ${err.name} gfgdfgdfgdfgdfgdfg`);
//
//   } else {q
//     next(err);
//   }
//   next();
// });

// app.use((err, req, res, next) => {
//   if (res.headersSent) {
//     next(err);
//
//   } else {
//     res.status(500);
//     res.send(`Error other: ${err.message} my error`);
//   }
// });
//
app.listen(port, () => {
  console.log(`We are live on ${port}`);
});

