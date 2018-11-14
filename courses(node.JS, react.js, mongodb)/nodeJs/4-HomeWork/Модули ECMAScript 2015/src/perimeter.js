"use strict";

const perimeter = (a, b) => {

  let result = 'Тип должен быть number и больше 0';

  if ( typeof a === 'number' && typeof  b === 'number') {
    if ( a > 0 && b > 0)
      result = `Периметр прямоугольника ${2*(a + b)}`;
  }

  return result;
};

export default perimeter;