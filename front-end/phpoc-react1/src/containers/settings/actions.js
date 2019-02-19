import at from './at';
import {setLocalStorage, getLocalStorage} from "../../utils/storage";
import {webSocketConnect, webSocketSend} from "../../main/webSocket/actions";

const showSettingsModal = () => {
  return dispatch => {
    dispatch({type: at.SHOW_MODAL})
  }
};

const closeSettingsModal = () => {
  return dispatch => {
    dispatch({type: at.CLOSE_MODAL})
  }
};

const saveWsSettings = ({ip, port, password}) => {
  return d => {
    setLocalStorage('ws_ip', ip);
    setLocalStorage('ws_port', port);
    setLocalStorage('access_password', password);
    d({type: at.SET_SETTINGS, data: {ip, port, password}});
    d(webSocketConnect())
  }
};

const getDefaultSettings = () => {
  return d => {
    const ip = getLocalStorage('ws_ip');
    const port = getLocalStorage('ws_port') || null;
    const password = getLocalStorage('access_password') || '';
    d({type: at.SET_SETTINGS, data: {ip, port, password}})
  }
};

const getIdsOfDevices = () => {
  return d => {
    console.log('TEST')
    webSocketSend('!ID\n\r')
  }
}

export {showSettingsModal, closeSettingsModal, saveWsSettings, getDefaultSettings, getIdsOfDevices}