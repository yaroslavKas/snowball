import constants from '../constants/AppConstants';
import api from '../utils/request'


const getNotesAction = () => {
  return dispatch => {
    api.listNotes()
      .then(({data}) => {
        dispatch({
          type: constants.SET_NOTES,
          data: data
        })
      })
      .catch(err => {
        console.log(err, constants.SET_NOTES_ERROR)
      });



  }
};

const setCreateNote = (data) => {

  return dispatch => {
    api.createNote(data)
      .then(() => {
        dispatch(getNotesAction());
        // dispatch(
        //   getNotesAction(data),
        //   {
        //     type: constants.CREATE_NOTE,
        //     // note: data
        //   }
        // );
        console.log(data);

      })
      .catch(err => {
        console.log(err, constants.SET_NOTES_ERROR)
      })
  }
};

const deleteNote = (data) => {
  return dispatch => {
    api.deleteNote(data)
      .then(() => {
        dispatch({
          type: constants.DELETE_NOTE
        });
        dispatch(getNotesAction());
      })
  }
};

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



export  {
  getNotesAction,
  setCreateNote,
  deleteNote
};

// export const getNotes = () => {
//   return dispatch => {
//     setTimeout(() => {
//       console.log('I got notes');
//       dispatch({
//         type: 'SET_NOTES',
//         notes: []
//       })
//     }, 2000)
//   }
// };