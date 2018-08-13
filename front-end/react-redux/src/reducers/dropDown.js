import constants from '../constants/AppConstants';

const initialState = {
  stateDropDown: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_TOGGLE:
      return {...state, stateDropDown: !state.stateDropDown};
    case constants.SET_TOGGLE_FALSE:
      return {...state, stateDropDown: false};
    default:
      return state
  }
}