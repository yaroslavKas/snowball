import constant from '../../config/const';

const initialState = {
  auth: [],
  login: []
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case constant.REGISTER_SUCCESS:
      return {...state, auth: action.data};
    case constant.LOGIN_SUCCESS:
      return {...state, login: action.data};
    default:
      return state
  }
}