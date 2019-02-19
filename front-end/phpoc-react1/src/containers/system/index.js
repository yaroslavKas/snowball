import {connect} from 'react-redux';
import Component from './Component';

const stp = (s) => ({
  deviceId: s.system.deviceId,
  openedChanel: s.system.openedChanel,
  deviceStatus: s.system.deviceStatus,
  confirmedPassword: s.system.confirmedPassword,
  commandsAnswers: s.system.commandsAnswers,
  mainSettings: s.mainSettings,
});

const dtp = () => ({
});

export default connect(stp, dtp)(Component);