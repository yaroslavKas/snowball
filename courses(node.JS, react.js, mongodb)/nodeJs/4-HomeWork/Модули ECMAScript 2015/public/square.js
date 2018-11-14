"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var square = function square(a, b) {

  var result = 'Тип должен быть number и больше 0';

  if (typeof a === 'number' && typeof b === 'number') {
    if (a > 0 && b > 0) result = '\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u0430 ' + a * b;
  }

  return result;
};

exports.default = square;