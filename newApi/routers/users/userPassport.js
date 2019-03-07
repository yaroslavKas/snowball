import mongoose from 'mongoose';
import Passport from 'passport-jwt';


const JWTStrategy = Passport.Strategy;
const ExtractJWT = Passport.ExtractJWT;
const User = mongoose.model('User');
const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

const userPassport = (passport) => {
  passport.use(new JWTStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          return done(null, user)
        }
        return done(null, false);
      })
      .catch(err => console.error(err));
  }));
};

modules.exports = userPassport;

