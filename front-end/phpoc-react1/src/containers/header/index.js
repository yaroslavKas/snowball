import {connect} from 'react-redux';
import Component from './Component';
import {showSettingsModal} from '../settings/actions';
import {openModalGetDevices} from "../devices/actions";

const dtp = (d) => ({
  showSettingsModal: () => {
    d(showSettingsModal())
  },
  openModalGetDevices: () => {
    d(openModalGetDevices())
  }
});

export default connect(null, dtp)(Component);