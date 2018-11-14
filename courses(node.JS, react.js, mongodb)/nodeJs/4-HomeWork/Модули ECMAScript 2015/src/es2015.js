export let x = 1;
export let y = (name) => {
  console.log(`Hello ${name}`)
};

export class User {
  constructor(name) {
    this.name = name;
  }
}

// module.exports = {
//   x, y , User
// };