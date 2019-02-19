import at from './at';
import atSystem from '../system/at';
import rs from '../../config/routes';
import {webSocketSend, webSocketConnect} from "../../main/webSocket/actions";

let waitingForConnection = [];
let setTimeoutGetDevices = null;
let setTimeoutProgressConnect = null;

const clearTimeouts = () => {
  if (setTimeoutGetDevices)
    clearTimeout(setTimeoutGetDevices);
  if (setTimeoutProgressConnect)
    clearTimeout(setTimeoutProgressConnect);
};

const getProgress = (time, t = 0) => {
  return dispatch => {
    const timer = t / 10;
    const onePersent = time / 100;
    let connectProgress = timer / onePersent;
    if (connectProgress > 100) {
      connectProgress = 100
    } else {
      setTimeoutProgressConnect = setTimeout(() => {
        dispatch(getProgress(time, (t + 1)))
      }, 100)
    }
    dispatch({type: at.DEVICES_SET_CONNECT_PROGRESS, data: Math.round(connectProgress), time: Math.round(time - timer)})
  }
};

const stopGetDevices = () => {
  console.log('Stop Get Devices')
  return dispatch => {
    clearTimeouts();
    webSocketSend('!CC\n\r');
    dispatch({type: at.DEVICES_SET_CONNECT_PROGRESS, data: 0, time: 0});
    dispatch({type: at.DEVICES_STOP_GET})
  }
};

const getDevices = () => {
  clearTimeouts();

  return (dispatch, getState) => {
    const {ws, devices} = getState();
    if (ws.isConnected && ws.TCPConnected) {
      dispatch({type: at.DEVICES_START_GET});

      dispatch(getProgress(devices.timeoutInSeconds));

      webSocketSend('!ID\n\r');

      setTimeoutGetDevices = setTimeout(() => {
        dispatch(stopGetDevices())
      }, devices.timeoutInSeconds * 1000)

    } else if (waitingForConnection.length === 0) {
      waitingForConnection.push(getDevices);
      dispatch(webSocketConnect())
    }
  }
};

const openModalGetDevices = () => {
  return (dispatch, getState) => {
    const {devices} = getState()
    dispatch({type: at.DEVICES_OPEN_MODAL});
    if (devices.idsOfDevices.length === 0)
      dispatch(getDevices())
  }
};

const openChanelWithDeviceId = (id, history) => {
  return dispatch => {
    dispatch(stopGetDevices());
    dispatch({type: atSystem.SYSTEM_SET_SELECTED_DEVICE_ID, data: id});
    dispatch({type: at.DEVICES_CLOSE_MODAL});
    history.push(rs.system);

    // webSocketSend(`!OC${id}\n\r`);
    // setTimeout(()=>{webSocketSend('!ST\n\r')}, 500);
    // setTimeout(()=>{webSocketSend('!MA12345678\n\r')}, 1000)
  }
};

const getDevicesWatch = (dispatch, state) => {
  if (state.ws.isConnected && state.ws.TCPConnected) {
    if (waitingForConnection[0]) {
      const wc = waitingForConnection[0];
      waitingForConnection = [];
      dispatch(wc());
    }
  }
};

export {getDevices, getDevicesWatch, openModalGetDevices, stopGetDevices, openChanelWithDeviceId};