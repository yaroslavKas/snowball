"use strict";

import express from 'express';
import bodyParser from 'body-parser';
import userController from './userController';

let userRouter = express.Router();

userRouter.use(bodyParser.json());


userRouter.route('/registration')
  .post(userController.registration);

userRouter.route('/login')
  .post(userController.login);


module.exports = userRouter;