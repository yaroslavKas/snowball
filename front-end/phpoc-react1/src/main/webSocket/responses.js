import at from './at';
import {parse} from "./parseTCPResponses";

const wsResponses = (ws) => {
  const socket = ws;

  return dispatch => {
    socket.onmessage = (event) => {

      try {
        const res = JSON.parse(event.data);
        // console.log('Web socket response', res);
        switch (res.type) {
          case at.TCP_CONNECTED:
            dispatch({type: res.type});
            break;

          case at.TCP_DISCONNECTED:
            dispatch({type: res.type});
            break;

          case at.TCP_RESPONSE:
            // console.log(res.data)
            dispatch(parse(res.data));
            break;

          default:
            break;
        }
      } catch (e) {
        console.error('error data ws:', e, event.data)
      }
    }
  }
};

export {wsResponses}
