import update from 'immutability-helper';
import initState from './initState';
import at from './at';

const ws = (state = initState, action) => {
  switch (action.type) {
    case at.WEB_SOCKET_CONNECTED:
      return update(state, {
        isConnected: {$set: true},
        error: {$set: {}}
      });
    case at.WEB_SOCKET_ERROR:
      return update(state, {
        isConnected: {$set: false},
        TCPConnected: {$set: false},
        error: {$set: action.data || {}}
      });
    case at.WEB_SOCKET_DISCONNECTED:
      return update(state, {
        isConnected: {$set: false},
        TCPConnected: {$set: false},
        error: {$set: {}}
      });
    case at.WEB_SOCKET_ERROR_CONNECTION:
      return update(state, {
        isConnected: {$set: false},
        error: {$set: action.data || {}}
      });

    case at.TCP_CONNECTED:
      return update(state, {
        TCPConnected: {$set: true}
      });
    case at.TCP_DISCONNECTED:
      return update(state, {
        TCPConnected: {$set: false}
      });

    default:
      return state;
  }
};

export default ws;
