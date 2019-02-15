"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/usersdb");

let UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      default: "name",
      minlength: 2,
      maxlength:20,
    },
    sge: Number,
    company: {
      name: String,
      clients: [String]
    }
  },
  {
    versionkey: false
  }
);

let User = mongoose.model("User", UserSchema);


