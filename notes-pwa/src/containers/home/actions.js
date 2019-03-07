import constants from '../../config/const';
import api from '../../utils/request'


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