import React, {Component} from 'react'
import Note from './Note';
import NoteSearch from "./NoteSearch";

class NoteGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesList: [],
      searchResult: []
    }
  }

  componentDidMount = () => {
    let localNotes = JSON.parse(localStorage.getItem('notes'));

    if (localNotes) {
      this.setState({ notesList: localNotes, searchResult: localNotes});
    }
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({notesList: nextProps.notes, searchResult: nextProps.notes})
  };

  componentDidUpdate = () => {
    this._updateLocalStorage();
  };

  handleNoteSearch = (e) => {
    const {notesList} = this.state;
    const noteValue = e.target.value.toLowerCase();

    const searchResult = notesList.filter((note) => {
      let searchValue = note.body.toLowerCase();
      return searchValue.indexOf(noteValue) !== -1;

    });

    this.setState({ searchResult: searchResult });
  };




  render() {
    const { searchResult } = this.state;
    const {deleteNote} = this.props;

    return (
      <div>
        <NoteSearch
          noteSearch={this.handleNoteSearch}
        />
        <ul>
          {
            console.log(searchResult)
          }
          {
            searchResult.map((note) => {
              return (
                <Note
                  key={note._id}
                  id={note._id}
                  body={note.body}
                  deleteNote={deleteNote}
                />
              )
            })
          }
        </ul>
      </div>

    )
  }
  _updateLocalStorage = () => {
    let notes = null;
    if (navigator.onLine) {
      notes = JSON.stringify(this.props.notes);
      console.log("used is api");

    } else {
      notes = JSON.stringify(this.state.notesList);
      console.log("used is local state")
    }

    localStorage.setItem('notes', notes);
  }
}

export default NoteGrid;