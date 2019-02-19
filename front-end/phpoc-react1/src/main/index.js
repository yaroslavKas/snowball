import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import Component from './Component';
import {webSocketConnect} from "./webSocket/actions";
import {getXml} from "./actions";
import {getDefaultSettings} from "../containers/settings/actions";

const stp = (s) => ({
  comboBox: s.main.comboBox
});

const dtp = (d) => ({
  webSocketConnect: () => {
    d(webSocketConnect())
  },
  getXml: () => {
    d(getXml())
  },
  getDefaultSettings: () => {
    d(getDefaultSettings())
  }
});

export default withRouter(connect(stp, dtp)(Component))