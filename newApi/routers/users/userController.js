import User from './userSchema';
import bcrypt from 'bcrypt';

// import validateLogin from './userLogin';
// import validateRegister from './userRegister';
// import passport from './userPassport';

let userController = {};

userController.registration = (req, res) => {
  // console.log(req.body);
  // const { errors, isValid} = validateRegister(req.body);

  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  const login = req.body.email;
  const password = req.body.password;



  const saltRounds = 10;

  if (!login || !password) {

    const fields = [];

    if (!login) fields.push('login');
    if (!password) fields.push('password');

    res.json({
      ok: false,
      error: 'All input must be full',
      fields
    });
    res.end();

  } else if (!/[a-zA-Z0-9]/.test(login)) {
    res.json({
      ok: false,
      error: 'only latin letters and numbers',
      fields: ['login']
    });
    res.end();

  } else if (password.length < 6) {
    res.json({
      ok: false,
      error: 'password min 6 letters',
      fields: ['email']
    });
    res.end();

  } else {

    User.findOne({email: login}).then(user => {
      if (!user) {
        bcrypt.hash(password, saltRounds, (err, hash) =>  {
          const user = {
            email: login,
            password: hash
          };

          User.create(user).then(() => {
            req.session.userId = user._id;
            req.session.userLogin = user.email;
            res.status(201);
            res.json({
              ok: true,
              auth: 'accepted'
            });
          })
        });
      } else {
        res.json({
          ok: false,
          error: "Name used",
          fields: ['login']
        })
      }
    })


  }
};

userController.login = (req, res) => {
  const login = req.body.email;
  const password = req.body.password;

  if (!login || !password) {

    const fields = [];

    if (!login) fields.push('login');
    if (!password) fields.push('password');

    res.json({
      ok: false,
      error: 'All input must be full',
      fields
    });
    res.end();

  } else {

    User.findOne({email: login}).then(user => {
      if (!user) {
        res.json({
          ok: false,
          error: 'Login and  password incorrect',
          fields: ['login', 'password']
        })
      } else {
        bcrypt.compare(password, user.password, (err, result) => {
          if (!result) {
            res.json({
              ok: false,
              auth: 'rejected',
              error: 'Login and  password incorrect',
              fields: ['login', 'password']
            })
          } else {
            console.log(user);

            req.session.userId = user._id;
            req.session.userLogin = user.email;
            res.json({
              ok: true,
              auth: 'accepted'
            });
          }
        });
      }
    })
  }
};

module.exports = userController;