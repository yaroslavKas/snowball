// Include Nodejs' net module.
const Net = require('net');
// The port number and hostname of the server.
const port = 1234;
const host = 'www.emitronics.com';

const WebSocketServer = require('websocket').server;
const http = require('http');
const server = http.createServer(function(request, response) {
  // process HTTP request. Since we're writing just WebSockets
  // server we don't have to implement anything.
});
server.listen(1337, function() { });

// create the server
const wsServer = new WebSocketServer({
  httpServer: server
});

// WebSocket server
wsServer.on('request', function(request) {
  const connection = request.accept(null, request.origin);

  // This is the most important callback for us, we'll handle
  // all messages from users here.
  connection.on('message', function(message) {
    if (message.type === 'utf8') {
      // process WebSocket message
    }
  });

  connection.on('close', function(connection) {
    // close user connection
  });
});


// Create a new TCP client.
const client = new Net.Socket();
// Send a connection request to the server.
client.connect({ port: port, host: host }, function() {
  // If there is no error, the server has accepted the request and created a new
  // socket dedicated to us.
  console.log('TCP connection established with the server.' + host + ':' + port);

  // The client can now send data to the server by writing to its socket.
  //AM12345678

  //!ID\n\r!OCCF65\n\r!MA12345678\n\r

  // client.write('!ID\n\r');
  client.write('!OC7326\n\r'); // ID
  // client.write('!I00CF65CF65\n\r');
  setTimeout(() => {client.write('!MA12345678\n\r')}, 20);

  setTimeout(() => {client.write('!ST\n\r')}, 20);

});

// The client can also receive data from the server by reading from its socket.
client.on('data', function(chunk) {
  console.log(`Data received from the server: ${chunk.toString()}.`);
  console.log(chunk)

  // Request an end to the connection after the data has been received.
  // client.end();
});

client.on('end', function() {
  console.log('Requested an end to the TCP connection');
});


//!A0000000000 corect password