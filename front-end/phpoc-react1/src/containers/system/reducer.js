import update from 'immutability-helper';
import at from './at';
import initState from './initState';

export default (state = initState, action) => {

  switch (action.type) {

    case at.SYSTEM_SET_SELECTED_DEVICE_ID:
      return update(state, {
        deviceId: {$set: action.data},
        openedChanel: {$set: ''},
        deviceStatus: {$set: ''},
        confirmedPassword: {$set: false},
        commandsAnswers: {$set: []}
      });
    case at.SYSTEM_SET_OPENED_CHANEL:
      return update(state, {
        openedChanel: {$set: action.data}
      });
    case at.SYSTEM_SET_DEVICE_STATUS:
      return update(state, {
        deviceStatus: {$set: action.data}
      });
    case at.SYSTEM_SET_CONFIRMED_PASSWORD:
      return update(state, {
        confirmedPassword: {$set: true}
      });


    case at.SYSTEM_SET_COMMAND_RESPONSE:{
      const commandsAnswers = [...state.commandsAnswers];
      commandsAnswers.unshift({value: action.data, id: commandsAnswers.length + 1});
      return update(state, {
        commandsAnswers: {$set: commandsAnswers}
      })
    }

    default:
      return state;
  }
}