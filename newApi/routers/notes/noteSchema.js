import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let NoteSchema = new Schema(
  {
    note: {
      type: String,
      require: true,
      minlength: 3,
    }
  }, {versionKey: false}
);

module.exports = mongoose.model('Note', NoteSchema);