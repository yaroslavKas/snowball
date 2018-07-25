// 'use strict';

const http = require('http');
const utils = require('util');

http.createServer((req, res) => {
  const requesInfo = utils.format('HTTPVersion: %s \nMethod: %s \nStatus code %s \nMessage: %s \nURL: %s',
      req.httpVersion,
      req.method,
      req.statusCode,
      req.statusMessage,
      req.url);

  console.log('info me',requesInfo);
  console.log();

  for (let key in req.headers) {detail
    console.log(key, ":", req.headers[key]);
  }

  res.end();
}).listen(8080, 'localhost');



