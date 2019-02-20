import React, {Component} from 'react';
import NoteEditor from './components/NoteEditor';

// import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
  }
  componentDidMount = () => {
    let localNotes = JSON.parse(localStorage.getItem('notes'));
    if (localNotes) {
      this.setState({ notes: localNotes });
    }

    console.log('localNotes', localNotes)

  };

  componentDidUpdate = () => {
    this._updateLocalStorage();
    let localNotes = JSON.parse(localStorage.getItem('notes'));
    console.log('localNotes', localNotes)
  };

  componentWillMount = () => {
    this.props.setNotesFunction();
  };

  handleNoteDelete = (note) => {
    // const noteId = note._id;
    // const newNotes = this.state.notes.filter(function(note) {
    //   return note.id !== noteId;
    // });
    // this.setState({ notes: newNotes });
    this.props.deleteNote(note._id)
  };


  render() {
    const {notes} = this.props;
    // const {notes} = this.state;

    return (
      <div className="notes-list">
        <NoteEditor
          setCreateFunction={this.props.setCreateFunction}
        />
        <button onClick={this.handleNotes}>Notes</button>
        {
          notes != null ?
            notes.map((note) => {
              return (
                <div className="note" key={note._id}>


                  <h3>{note.body}</h3>
                  <button onClick={() => this.handleNoteDelete(note)}>Delete</button>
                </div>
              )
            }) : null
        }
      </div>
    )
  }
  _updateLocalStorage = () => {
    let notes = JSON.stringify(this.props.notes);
    localStorage.setItem('notes', notes);
  }
}

export default Home;