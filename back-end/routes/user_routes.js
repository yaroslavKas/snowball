const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = require('../etc/config');

module.exports = {
  // signup: function(name, email, password) {
  //   MongoClient.connect(url, function (err, db) {
  //     db.collection('user').insertOne( {
  //       "name": name,
  //       "email": email,
  //       "password": password
  //     },function(err, result){
  //       assert.equal(err, null);
  //       console.log("Saved the user sign up details.");
  //     });
  //   });
  // }
};