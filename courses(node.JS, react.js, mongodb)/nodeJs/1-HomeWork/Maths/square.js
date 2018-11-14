"use strict";

module.exports = (a, b) => {

  let result = 'Тип должен быть number и больше 0';

  if ( typeof a === 'number' && typeof  b === 'number') {
    if ( a > 0 && b > 0)
      result = `Площадь прямоугольника ${a * b}`;
  }

  return result;
};