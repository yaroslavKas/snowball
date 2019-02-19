import {connect} from 'react-redux';
import Component from './Component';
import at from './at';
import {getDevices, stopGetDevices, openChanelWithDeviceId} from "./actions";

export default connect(
  s => ({
    progressInSeconds: s.devices.progressInSeconds,
    progressInPercent: s.devices.progressInPercent,
    openModal: s.devices.openModal,
    responseGetDevices: s.devices.responseGetDevices,
    idsOfDevices: s.devices.idsOfDevices,
  }),
  d => ({
    close: () => {
      d({type: at.DEVICES_CLOSE_MODAL})
    },
    getDevices: () => {
      d(getDevices())
    },
    stopGetDevices: () => {
      d(stopGetDevices())
    },
    openChanelWithDeviceId: (id, history) => {
      d(openChanelWithDeviceId(id, history))
    }
  })
)(Component)