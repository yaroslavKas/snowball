const WebSocket = require('ws');
const Net = require('net');

const port = 1234;
const host = 'www.emitronics.com';

const wss = new WebSocket.Server({port: 7701});


wss.on('connection', ws => {

  const clientTCP = new Net.Socket();
  setTimeout(() => {
    try {
      clientTCP.connect({port, host}, () => {
        // If there is no error, the server has accepted the request and created a new
        // socket dedicated to us.
        console.log('TCP connection established with the server. ' + host + ':' + port);
        console.log('WS', ws.readyState)
        ws.send(JSON.stringify({type: 'TCP_CONNECTED', data: true}))
      });
    } catch (e) {
      console.error(e)
    }
  }, 500);


  ws.on('message', message => {
    console.log('TCP Sent ', message)
    // clientTCP.write('!ID');
    clientTCP.write(message);
  });

  // The client can also receive data from the server by reading from its socket.

  clientTCP.on('data', (chunk) => {
    console.log(`Data received from the server: ${chunk.toString()}.`);
    // console.log(chunk);

    try {
      ws.send(JSON.stringify({type: 'TCP_RESPONSE', data: chunk.toString()}))
    } catch (e) {
      console.error(e)
    }

  });


  // setTimeout(() => {clientTCP.end()}, 3000);

  ws.on('close', () => {
    console.log('Web socket disconnected');
    clientTCP.end()
  });

  clientTCP.on('end', () => {
    console.log('Requested an end to the TCP connection');
    if (ws && typeof ws.send === 'function' && ws.readyState === 1) {
      ws.send(JSON.stringify({type: 'TCP_DISCONNECTED'}))
    }
  });

  clientTCP.on('error', () => {
    console.log('Requested an end to the TCP connection');
    if (ws && typeof ws.send === 'function' && ws.readyState === 1) {
      ws.send(JSON.stringify({type: 'TCP_DISCONNECTED'}))
    }
  });
});

