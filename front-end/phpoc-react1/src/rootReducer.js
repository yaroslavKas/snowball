import { combineReducers } from 'redux';
import { i18nState } from 'redux-i18n';
import ws from './main/webSocket/reducer';
import main from './main/reducer';
import mainSettings from './containers/settings/reducer';
import devices from './containers/devices/reducer';
import system from './containers/system/reducer';

export default combineReducers({
  i18nState,
  ws,
  main,
  mainSettings,
  devices,
  system,
})