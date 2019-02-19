import {connect} from 'react-redux';
import Component from './Component';
import {closeSettingsModal, saveWsSettings} from './actions';

const stp = (s) => ({
  isOpen: s.mainSettings.showSettingsModal,
  ip: s.mainSettings.ip,
  port: s.mainSettings.port,
  password: s.mainSettings.password,
  isConnected: s.ws.isConnected,
});

const dtp = (d) => ({
  close: () => {
    d(closeSettingsModal())
  },
  saveWsSettings: (data) => {
    d(saveWsSettings(data))
  }
 });

export default connect(stp, dtp)(Component);