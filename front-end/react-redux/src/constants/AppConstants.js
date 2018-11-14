import keyMirror from 'keymirror';

export default keyMirror({
  SET_TOGGLE: 'SET_TOGGLE',
  SET_TOGGLE_FALSE: 'SET_TOGGLE_FALSE',
  SET_NOTES: 'SET_NOTES',
  SET_NOTES_ERROR: 'SET_NOTES_ERROR',
  CREATE_NOTE: 'CREATE_NOTE',
  DELETE_NOTE: 'DELETE_NOTE',
  LOGIN: {
    pending: 'LOGIN/pending',
    success: 'LOGIN/success',
    rejected: 'LOGIN/rejected',
  },
})