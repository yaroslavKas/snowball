"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var x = exports.x = 1;
var y = exports.y = function y(name) {
  console.log("Hello " + name);
};

var User = exports.User = function User(name) {
  _classCallCheck(this, User);

  this.name = name;
};

// module.exports = {
//   x, y , User
// };