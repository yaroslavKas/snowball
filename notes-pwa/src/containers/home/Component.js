import React from 'react';

// import PropTypes from 'prop-types';

class Home extends React.Component {
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
        <button onClick={this.handleNotes}>Notes</button>
        {
          notes != null ?
            notes.map((note) => {
              return (
                <div className="note" key={note._id}>
                  <h3>{note.title}</h3>
                  {note.text && <p>{note.text}</p>}
                  {note.test && <p>{note.test}</p>}
                  {note.param && <p>{note.param}</p>}
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