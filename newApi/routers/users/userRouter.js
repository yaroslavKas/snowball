"use strict";

import express from 'express';
import bodyParser from 'body-parser';
import userController from './userController';

let userRouter = express.Router();

userRouter.use(bodyParser.json());


userRouter.route('/')
  // .get(noteController.getAll)
  .post(userController.post);


module.exports = userRouter;