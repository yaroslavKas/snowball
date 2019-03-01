import constants from '../../config/const';
import api from '../../utils/request'


// const submitRegister = (data, cb) => {
//   return (dispatch, getState) => {
//     const state = getState();
//     data.language = state.i18nState.lang;
//     return request
//       .post('register', data, actionTypes.REGISTER)
//       .then(() => {
//         dispatch({type: actionTypes.REGISTER.success});
//         if (typeof cb === 'function') {
//           cb()
//         }
//       })
//       .catch((err) => {
//         dispatch({type: actionTypes.REGISTER.rejected, data: {errorCode: err.errorCode}})
//       })
//   }
// };
//
// const submitLogin = (data) => {
//   const url = apiSettings.endpoints.genLoginUrl();
//   return dispatch => {
//     return request
//       .post(url, data, dispatch, actionTypes.LOGIN)
//       .then((res) => {
//         if (res.data.isAdmin) {
//           setLocalStorage('isAuthorised', 'true');
//           window.location.href = '/admin'
//         } else {
//           dispatch({type: actionTypes.LOGIN.fulfilled, data: res.data});
//           dispatch(getUserInfo());
//         }
//       })
//   }
// };

const submitRegister = (data) => {
  return dispatch => {
    api.registration(data)
      .then(() => {
        dispatch({
          type: constants.REGISTER_SUCCESS,
          auth: data
        });
        // console.log(res.data);
        console.log(data);

      })
      .catch(err => {
        console.log(err, constants.SET_NOTES_ERROR)
      })
  }
};


export {
  submitRegister,
}