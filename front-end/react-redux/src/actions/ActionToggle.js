import constants from '../constants/AppConstants';

const setToggleAction = () => {
  return {
    type: constants.SET_TOGGLE
  }
};

const setToggleActionFalse = () => {
  return {
    type: constants.SET_TOGGLE_FALSE
  }
};

export { setToggleAction, setToggleActionFalse };