import {connect} from 'react-redux';
import Component from './Component';

const stp = (s) => ({
  comboBox: s.main.comboBox
});

const dtp = () => ({
});

export default connect(stp, dtp)(Component);