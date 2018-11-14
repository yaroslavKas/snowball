"use strict";

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);

  return rand;
};


const random = (min, max, delay, callback) => {

  let data = null;
  let err = null;

  if (min < max) {
    data = randomInteger(min, max);
  } else {
    err = new Error('Min < max please change!!!');
  }

  setTimeout(() => callback(err, data), delay);
};

console.log(random(5, 4, 1000, (err, data) => {

  if (err) {
    console.log(err);
  }

  if (data) {
    console.log(`This is data ${data}`);
  }
}));

