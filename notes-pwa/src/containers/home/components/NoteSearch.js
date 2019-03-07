import React, { Component } from 'react'
import Input from '../../../components/Input'

class NoteSearch extends Component {


  render() {
    const {noteSearch} = this.props;

    return (
      <div className="notes__search">
        <Input
          type="text"
          placeholder="Search here"
          value={this.props.value}
          onChange={noteSearch}
        />
      </div>
    )
  }
}

export default NoteSearch
