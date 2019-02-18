import {connect} from 'react-redux';
import Component from './Component';
import { getNotesAction, setCreateNote, deleteNote } from './actions';

const mapStateToProps = (state) => ({
    notes: state.notes.stateNotesList,
});

const mapDispatchToProps = (dispatch) => ({
    setNotesFunction: notesList => {
      dispatch(getNotesAction(notesList))
    },
    setCreateFunction: notesList => {
      dispatch(setCreateNote(notesList))
    },
    deleteNote: data => {
      dispatch(deleteNote(data))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);