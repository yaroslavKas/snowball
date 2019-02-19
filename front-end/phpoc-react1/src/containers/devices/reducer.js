import update from 'immutability-helper';
import initState from './initState';
import at from './at';

export default (state = initState, action) => {

  switch (action.type) {

    case at.DEVICES_OPEN_MODAL:
      return update(state, {
        openModal: {$set: true}
      });
    case at.DEVICES_CLOSE_MODAL:
      return update(state, {
        openModal: {$set: false}
      });

    case at.DEVICES_START_GET:
      return update(state, {
        responseGetDevices: {$set: []},
        idsOfDevices: {$set: []},
        pending: {$set: true},
      });
    case at.DEVICES_STOP_GET:
      return update(state, {
        pending: {$set: false}
      });


    case at.DEVICES_SET_SERVER_RES:
      return update(state, {
        responseGetDevices: {$set: action.data}
      });
    case at.DEVICES_SET_IDS:
      return update(state, {
        idsOfDevices: {$set: action.data}
      });
    case at.DEVICES_SET_CONNECT_PROGRESS:
      return update(state, {
        progressInPercent: {$set: action.data},
        progressInSeconds: {$set: action.time},
      });

    default:
      return state
  }
}