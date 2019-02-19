import atDevices from '../../containers/devices/at';
import atSystem from '../../containers/system/at';

import {webSocketSend} from "./actions";

const parse = (data) => {
  return (dispatch, getState) => {
    const {devices, system} = getState();
    const responseGetDevices = [...devices.responseGetDevices];
    const idsOfDevices = [...devices.idsOfDevices];

    responseGetDevices.push({value: data, id: responseGetDevices.length + 1});
    dispatch({type: atDevices.DEVICES_SET_SERVER_RES, data: responseGetDevices});

    if (data.search('!I00') !== -1) {
      const deviceId = data.slice(4, 8);
      if (devices.length < 4) {
        return
      }
      for (let i = 0; i < idsOfDevices.length; i++) {
        if (idsOfDevices[i].value === deviceId) {
          return
        }
      }
      // Then you ensure it closes his channel to stop sending his SN -> !CI15BB
      webSocketSend(`!CI${deviceId}\n\r`);
      idsOfDevices.push({value: deviceId, id: idsOfDevices.length + 1});

      dispatch({type: atDevices.DEVICES_SET_IDS, data: idsOfDevices})
    }

    if (data.search('!A00') !== -1 && data.slice(4, 8) === system.deviceId){
      dispatch({type: atSystem.SYSTEM_SET_OPENED_CHANEL, data});
    }

    if (data.search('!S08') !== -1 && data.slice(4, 8) === system.deviceId){
      dispatch({type: atSystem.SYSTEM_SET_DEVICE_STATUS, data})
    }

    if (data.search('!A0000000000') !== -1) {
      dispatch({type: atSystem.SYSTEM_SET_CONFIRMED_PASSWORD});
    }

    if (system.confirmedPassword){
      dispatch({type: atSystem.SYSTEM_SET_COMMAND_RESPONSE, data})
    }
    console.log(data)
  }
};

export {parse}