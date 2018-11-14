import constant from '../constants/AppConstants';

const initialState = {
  stateNotesList: null,
  createNote: []
};

export default function listNotes(state = initialState, action) {
  switch (action.type) {
    case constant.SET_NOTES:
      return {...state, stateNotesList: action.data };
    case constant.CREATE_NOTE:
      return {...state, createNote: action.data};
    default:
      return state
  }
}