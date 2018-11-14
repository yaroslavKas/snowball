"use strict";

const stream = require("stream");

class StreamArray extends stream.Readable {
  constructor(array) {
    super({objectMode: true});
    this._array = array;
  }

  _read() {
    this._array.forEach((value) => {
      this.push(value);
    });
    this.push(null);
  }
}

class ConsoleWriter extends stream.Writable {
  constructor() {
    super({objectMode: true});
  }

  _write(chunk, encoding, callback) {
    console.log(`Data: ${chunk}`);
    callback();
  }
}

class TypeTransform extends stream.Transform {
  constructor(type) {
    super({objectMode: true});
    this._type = type;
  }

  _transform(chunk, encoding, callback) {
    let res = this._type(chunk);
    this.push(res);
    callback();
  }
}

let sa = new StreamArray([1, 2, 0, 3, 1, 0, 39]);
let tt = new TypeTransform(Boolean);
let cw = new ConsoleWriter();

// sa.on("data", (chunk) => {
//   tt.write(chunk);
// });
// tt.on("data", (chunk) => {
//   cw.write(chunk);
// });
// sa.on("end", () => {
//   cw.end("END");
// });
sa.pipe(tt).pipe(cw);