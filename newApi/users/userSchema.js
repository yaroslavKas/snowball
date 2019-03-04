import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      minlength: 3
    },
    password: {
      type: Number,
      require: true,
      minlength: 8
    }
  }, {versionKey: false}
);

module.exports = mongoose.model('User', UserSchema);