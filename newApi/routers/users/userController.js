import User from './userSchema';
import validateLogin from './userLogin';
import validateRegister from './userRegister';
import passport from './userPassport';

let userController = {};

userController.post = (req, res) => {
  console.log(req.body);
  const { errors, isValid} = validateRegister(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const user = {
    email: req.body.email,
    password: req.body.password
  };

  User.create(user, (err, user) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(201);
      res.send(user);
    }
  })
};

module.exports = userController;