import React, {Component} from 'react'

class NoteSearch extends Component {


  render() {
    const {noteSearch} = this.props;

    return (
      <div className="note__search">
        <input type="text" onChange={noteSearch} placeholder="Search here" />
        <button type="button">Search</button>
      </div>
    )
  }
}

export default NoteSearch
