import React, { Component } from 'react'
import Note from './Note';
import NoteSearch from './NoteSearch';
import Masonry from 'masonry-layout';

class NoteGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesList: [],
      searchResult: [],
      searchValue: ''
    }
  }


  componentDidMount = () => {
    let localNotes = JSON.parse(localStorage.getItem('notes'));

    if (localNotes) {
      this.setState({ notesList: localNotes, searchResult: localNotes});
    }

    let grid = this.refs.grid;
    this.msnry = new Masonry( grid, {
      itemSelector: '.notes__item',
      gutter: 10,
    });
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({notesList: nextProps.notes, searchResult: nextProps.notes})
  };

  componentDidUpdate = () => {
    this._updateLocalStorage();

    this.msnry.reloadItems();
    this.msnry.layout();
  };

  handleNoteSearch = (e) => {
    const {notesList} = this.state;
    const noteValue = e.target.value.toLowerCase();

    const searchResult = notesList.filter((item) => {
      let searchValue = item.note.toLowerCase();
      return searchValue.indexOf(noteValue) !== -1;

    });

    this.setState({
      searchValue: e.target.value,
      searchResult: searchResult
    });
  };




  render() {
    const { searchResult, searchValue } = this.state;
    const {deleteNote} = this.props;

    return (
      <div className="notes__grid">
        <NoteSearch
          value={searchValue}
          noteSearch={this.handleNoteSearch}
        />
        <ul className="notes__list grid" ref="grid">
          {
            searchResult.map((note) => {
              return (
                <Note
                  key={note._id}
                  id={note._id}
                  body={note.note}
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