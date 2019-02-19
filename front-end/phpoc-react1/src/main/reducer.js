import update from 'immutability-helper';
import initState from './initState';
import at from './at';

export default (state = initState, action) => {

  switch (action.type) {

    case at.SET_COMBO_BOX:
      return update(state, {
        comboBox: {$set: action.data}
      });

    default:
      return state
  }
}