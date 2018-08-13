import constant from '../constants/AppConstants';

const initialState = {
  notesList: null
};

export default function listNotes(state = initialState, action) {
  switch (action.type) {
    case constant.SET_NOTES:
      return {...state, notesList: action.data };
    default:
      return state
  }
}