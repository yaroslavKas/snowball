import update from 'immutability-helper';
import initState from './initState';
import at from './at';

export default (state = initState, action) => {

  switch (action.type) {

    case at.SHOW_MODAL:
      return update(state, {
        showSettingsModal: {$set: true}
      });
    case at.CLOSE_MODAL:
      return update(state, {
        showSettingsModal: {$set: false}
      });

    case at.SET_SETTINGS:
      return update(state, {
        port: {$set: action.data.port || null},
        ip: {$set: action.data.ip || ''},
        password: {$set: action.data.password || null},
      });

    default:
      return state
  }
}