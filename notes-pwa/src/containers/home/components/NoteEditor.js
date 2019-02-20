import React, {Component} from 'react';


class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleNoteAdd = () => {
    const {text} = this.state;
    const data = {
      body: text,
      color: 'yellow',
      // id: Date.now()
    };

    // this.props.onNoteAdd(data);
    this.props.setCreateFunction(data);
    this.setState({text: ''})
    console.log(JSON.parse(localStorage.getItem('notes')))
  };

  render() {
    return (
      <div className="note-editor">
        <textarea
          placeholder="Enter your note here..."
          rows={5}
          className="textarea"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <button type="button" className="add-button" onClick={this.handleNoteAdd}>Add</button>
      </div>
    )
  }
}

export default NoteEditor;