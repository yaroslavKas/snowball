import at from './at';
import {wsResponses} from './responses';
import {getLocalStorage} from '../../utils/storage';

let webSocket = null;
let isConnected = false;
let countConnection = 0;

const createRandom = (from, to) => {
  return Math.floor(Math.random() * to) + from
};

const getDelayConnect = (count) => {
  const delayConnect = [500, 2000, 4000, 6000, 8000];
  const result = (count < 5 ? delayConnect[count] : createRandom(10000, 20000));
  console.log('Connection timeout', result);
  return result
};

const webSocketSend = (data) => {
  if (isConnected)
    webSocket.send(data);
  else
    console.log('Socket is not connected')
};

const getConnectParams = () => {
  const protocol = getLocalStorage('ws_protocol') || (process.env.NODE_ENV === 'production' ? 'wss' : 'ws');
  const ip = getLocalStorage('ws_ip');
  const port = getLocalStorage('ws_port');
  const route = getLocalStorage('ws_additional_route') || '';

  const error = {};

  if (!ip) error.ip = 'Please add IP to settings';
  // if (!port) error.port ='Please add PORT to settings';
  if(Object.keys(error).length > 0) return {error};

  if(port){
    return {success: `${protocol}://${ip}:${port}/${route}`, params: {protocol, ip, port, route}}
  }
  return {success: `${protocol}://${ip}/${route}`, params: {protocol, ip, port, route}}
};

const webSocketConnect = () => {
  if (webSocket) {
    webSocket.close()
  }

  const connectParams = getConnectParams();

  const WebSocket = window.WebSocket || window.MozWebSocket;

  webSocket = new WebSocket(connectParams.success);

  return (dispatch, state) => {

    if (connectParams.error) {
      return dispatch({type: at.WEB_SOCKET_ERROR_CONNECTION, data: {message: connectParams.error}})
    }

    webSocket.onopen = () => {
      isConnected = true;
      countConnection = 0;
      dispatch({type: at.WEB_SOCKET_CONNECTED});
      dispatch(wsResponses(webSocket));
    };
    webSocket.onerror = (err) => {
      isConnected = false;
      dispatch({type: at.WEB_SOCKET_ERROR, data: err});
    };
    webSocket.onclose = (event) => {
      isConnected = false;
      dispatch({type: at.WEB_SOCKET_DISCONNECTED});

      if (event.wasClean) {
        console.log(`Closed ws connection: `, `Code: ${event.code} reason: ${event.reason}`);
      } else {
        console.error('Error socket connect.', `Code: ${event.code} reason: ${event.reason}`);
        // Set timeout for reconnect
        setTimeout(() => {
          if (countConnection <= 5)
            countConnection += 1;
          dispatch(webSocketConnect());
        }, getDelayConnect(countConnection));
        dispatch({type: at.WEB_SOCKET_ERROR_CONNECTION, data: {message: 'Error socket connect.', event}})
      }
    };
    return null;
  }
};

export {webSocketConnect, webSocketSend};