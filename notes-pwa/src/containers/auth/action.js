import constants from '../../config/const';
import api from '../../utils/request'

const submitLogin = (date) => {
  return dispatch => {
    api.login(date)
      .then((user) => {
        dispatch({
          type: constants.LOGIN_SUCCESS,
          data: user.data
        });
        console.log(user.data);
      })
      .catch(err => {
        console.log(err, constants.SET_NOTES_ERROR)
      })
  }
};

const submitRegister = (date) => {
  return dispatch => {
    api.registration(date)
      .then((user) => {
        dispatch({
          type: constants.REGISTER_SUCCESS,
          date: user.data
        });
        console.log(user);

      })
      .catch(err => {
        console.log(err, constants.SET_NOTES_ERROR)
      })
  }
};


export {
  submitRegister,
  submitLogin
}