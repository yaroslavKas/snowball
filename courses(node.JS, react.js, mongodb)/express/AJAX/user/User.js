let users = [];
let nextId = 1;

module.exports = class User {
   constructor(name, age) {
      this._id = nextId++;
      this.name = name;
      this.age = age;
   }
   
   get id() {
      return this._id;
   }
   
   static getAll() {
      return users;
   }
   static getById(id) {
      for (let i = 0; i < users.length; i++) {
         if (users[i].id === id) {
            return users[i];
         }
      }
   }
   
   static save(user) {
      users.push(user);
   }
   
   static update(id, user) {
      let currentUser = User.getById(id);
      if (currentUser !== undefined) {
         currentUser.name = user.name;
         currentUser.age = user.age;
      }
   }
   
   static remove(id) {
      users = users.filter((u) => u._id !== id);
   }
   
   static has(id) {
      return Boolean(User.getById(id));
   }
   
   static isValid(user) {
      if (user.name === undefined || user.age === undefined) {
         return false;
      }
      return true;
   }
}