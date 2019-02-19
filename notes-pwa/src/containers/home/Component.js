import React, {Component} from 'react';
import NoteEditor from './components/NoteEditor';

// import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount = () => {
    this.props.setNotesFunction();
  };

  handleNotes = () => {
    this.props.setNotesFunction();
    console.log(this.props.notes);
  };
  handleDelete = (id) => {
    this.props.deleteNote(id)
  };

  render() {
    const {notes} = this.props;


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
                  <button onClick={() => this.handleDelete(note._id)}>Delete</button>
                </div>
              )
            }) : null
        }
      </div>
    )
  }
}

export default Home;