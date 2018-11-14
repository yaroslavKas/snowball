import constants from '../constants/AppConstants';
import api from '../utils/request'


const submitLogin = () => {
  return dispatch => {
    // dispatch({type: constants.LOGIN.pending});
    api.auth()
      .then((response) => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      })
  }
};

const setCreateNote = (data) => {

  return () => {
    api.createNote(data)
      .then(() => {
        // dispatch(
        // getNotesAction(data),
        // {
        //   type: constants.CREATE_NOTE,
        //   // note: data
        // }
        // );
        console.log(data);

      })
      .catch(err => {
        console.log(err, constants.SET_NOTES_ERROR)
      })
  }
};

// const submitLogin = (data) => {
//   return dispatch => {
//     dispatch({type: actionTypes.LOGIN.pending});
//     return request
//       .post('login', data, actionTypes.LOGIN)
//       .then((res) => {
//         if (res.data.isAdmin) {
//           setLocalStorage('isAuthorised', 'true');
//           window.location.href = '/admin'
//         } else {
//           dispatch({type: actionTypes.LOGIN.success, data: res.data});
//         }
//       })
//       .catch((err) => {
//         dispatch({type: actionTypes.LOGIN.rejected, data: {errorCode: err.errorCode}})
//       })
//   }
// };


export { submitLogin }