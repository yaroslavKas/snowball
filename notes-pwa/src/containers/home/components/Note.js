import React, {Component}from 'react'

class Note extends Component {


  render() {

    const {
      body,
      deleteNote,
      id
    } = this.props;

    return (
      <li>
        <h3>{body}</h3>
        <button onClick={() => deleteNote(id)}>Delete</button>
      </li>
    )
  }
}

export default Note;