import constant from '../../config/const';

const initialState = {
  auth: []
};

export default function onRegistration(state = initialState, action) {
  switch (action.type) {
    case constant.REGISTER_SUCCESS:
      return {...state, auth: action.data};
    default:
      return state
  }
}