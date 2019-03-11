import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      default: Date.now
    }
  }, {versionKey: false}
);

module.exports = mongoose.model('User', UserSchema);