"use strict";

/**
 *
 * @param x
 * @param n
 * @returns {number}
 */

function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n ) return NaN;
  let result = 1;

  for (let i = 0; i < n; i++)  {
    result *= x;
  }

  return result;
}
// function Calculator() {
//   this.read = () => {
//     this.first = +prompt("Введите первое число", "");
//     this.second = +prompt("Введите второе число", "");
//   };
//   this.sum = function() {
//     return this.first + this.second
//     // console.log(this.first + this.second)
//   };
//   this.mul = function() {
//     // return this.first * this.second
//     // console.log(this.first * this.second)
//   };
// }
// let calculator = new Calculator();
// calculator.read()
// calculator.sum()
// calculator.mul()
//

// console.log(calculator);

// function randomNumber(min, max) {
//   let number = min + Math.random() * (max - min);
//   return number.toFixed();
//
// }
// console.log(randomNumber(1, 5))


// function checkSpam(str) {
//   let checkCase = str.toLowerCase();
//
//   return checkCase.includes("xxx") || checkCase.includes("viagra");
// }

// function truncate(str, max) {
//   if (str.length > max) {
//     return str.slice(0, max -1) + "..."
//
//   }
// }

// function extractCurrencyValue(str) {
//
//   return +str.slice(1);
// }

// function getMaxSubSum(arr) {
//   let sum = 0;
//   let partSum = 0;
//   for (let item of arr) {
//     partSum += item;
//     sum = Math.max(sum, partSum);
//     if (partSum < 0) {
//       partSum = 0
//     }
//   }
//   return sum
// }
//
// console.log(getMaxSubSum([-1, 2, 3, -9, 4, 3]))

// let arr = [1, 2];
// // arr.splice(1,1)
// // let teste = arr.slice(-2)
// let newArr = arr.concat([2, 3, 4])
// console.log(newArr)
//
//   ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   alert(`${item} имеет позицию ${index} в ${array}`);
// });

// function compare(a, b) {
//   return (a - b)
//   // if (a > b) return 1; // если первое значение больше второго
//   // if (a == b) return 0; // если равны
//   // if (a < b) return -1; // если первое значение меньше второго
// }

// let camelize = function(str) {
//   let strArray = str.split('-');
//   let result = [];
//   strArray.map((word, index) => {
//     if (index == 0) result.push(word);
//     else result.push(word[0].toUpperCase() + word.slice(1))
//   });
//
//   return result.join("");
// };
let arr = ["HTML", "JavaScript", "CSS"];

let copySorted = function(arr) {
  // let copy = [];
  //
  // arr.map(item => {
  //   copy.push(item);
  // });

  return arr.slice().sort();
};


let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);
// let names = 'Вася, Петя, Маша';
// console.log(names.split(','))
// //
// let rrr = arr.sort((a, b) => a-b);
//
// console.log(rrr)


// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.value += +prompt("Введите число", "");
//   }
// }
// let accumulator = new Accumulator(2);
// accumulator.read();
// accumulator.read();
//
// console.log(accumulator.value);

//
// let calculator = {
//   read: () => {
//     calculator.first = +prompt("Введите первое число ","");
//     calculator.second = +prompt("Введите второе число ","");
//   },
//   sum: function()  {
//     return this.first + this.second;
//   },
//   mul: function() {
//     return this.first * this.second
//   }
// };
//
// calculator.read();
//
//
// console.log(calculator.sum());
// console.log(calculator.mul());

// console.log(user);

// function pow(x, n) {
//   let sum = x;
//   for (let i = 1; i < n; i++) {
//     sum *= x;
//   }
//  return sum
// }

// console.log(sum2(5,5))
//
// function sum(a, b) {
//   return a + b;
// }
//
//
// let sum2 = function(a, b) {
//   return a + b;
// };




// let sum = 0;
//
// while (true) {
//
//   let value = prompt("Введите число", "");
//
//   if (!value || sum > 50) break;
//   sum += Number(value);
// }

// console.log("Сумма:" + sum);

// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Значение на коорденатах ( ${i}, ${j})`, '');
//
//     if (!input) break outer;
//   }
// }
//
// alert("Готово");

// let i = 2;
// for (i; i <= 10; i++) {
//   // if (i % 2 == 1) continue;
//   if (i % 2 == 0) alert(i)
//
// }


// let number = 0;
// for (let i = 0; number < 100; i++) {
//
//   number = prompt("Введите число больше 100 ", "");
//   if (number == null) break;
//
// }
// let num;
// do {
//   num = prompt("Введите число, большее 100?", 0);
//   console.log(num)
// } while (num <= 100 && num);

