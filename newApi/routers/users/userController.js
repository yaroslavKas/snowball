import User from './userSchema';
// import validateLogin from './userLogin';
// import validateRegister from './userRegister';
// import passport from './userPassport';

let userController = {};

userController.post = (req, res) => {
  console.log(req.body);
  // const { errors, isValid} = validateRegister(req.body);

  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }


  const user = {
    email: req.body.email,
    password: req.body.password
  };

  if (!user.email || !user.password) {
    res.status(404);
    res.json({
      ok: false,
      error: 'All input must be full',
      fields: ['email, password']
    });
    res.end();
  } else if (user.password.length < 6) {
    res.status(404);
    res.json({
      ok: false,
      error: 'password min 3 letters',
      fields: ['email']
    });
    res.end();
  } else {
    User.create(user, (err, user) => {
      res.status(201);
      res.json(user);
    })
  }
};

module.exports = userController;