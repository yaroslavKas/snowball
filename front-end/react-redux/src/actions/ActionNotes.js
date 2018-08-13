import constants from '../constants/AppConstants';
import api from '../utils/request'
//
//
const setNotesAction = () => {
  return (dispatch) => {
    api.listNotes()
      .then(({data}) => {
        console.log(data);
        dispatch({
          type: constants.SET_NOTES,
          data: data
        })
      })
      .catch(err => {
        console.log(err, constants.SET_NOTES_ERROR)
      })
  }
};



export  {
  setNotesAction
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