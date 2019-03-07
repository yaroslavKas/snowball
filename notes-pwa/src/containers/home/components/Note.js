import React from 'react'

const Note = (props) => {

  const {
    body,
    deleteNote,
    id
  } = props;

  return (
    <li className="notes__item">
      <p>{body}</p>
      <button onClick={() => deleteNote(id)}>Delete</button>
    </li>
  )
};

export default Note;