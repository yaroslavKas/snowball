console.log('File mod.js is loaded!');
// const events = require('events');
//
// function ReadFile() {
//   this.file = "";
// }
//
// ReadFile.prototype = new events.EventEmitter();
//
// ReadFile.prototype.readDataFromFile = function(path, callback) {
//   this.file = path;
//
//   if (typeof  callback === 'function') {
//     this.on('readData', callback)
//   }
//   this._read();
// };
//
// ReadFile.prototype._read = function() {
//   console.log('Loading...');
//
//   const someDataFromFile = 'Text text my text';
//
//   console.log('Data was read.');
//
//   this.emit('readData', someDataFromFile);
// };


// module.exports = {
//   variable: number,
//   sayHallo: hello
// };
// module.exports.Reader = ReadFile;