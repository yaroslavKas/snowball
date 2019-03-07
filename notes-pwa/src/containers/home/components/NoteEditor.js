import React, {Component} from 'react';
import Button from '../../../components/Button'


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
      note: text,
      // id: Date.now()
    };

    // this.props.onNoteAdd(data);
    this.props.setCreateFunction(data);

    this.setState({text: ''});
  };

  render() {
    return (
      <div className="notes__editor">
        <div className="notes__editor-block">
          <textarea
            placeholder="Enter your note here..."
            rows={5}
            className="textarea"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <Button
            name="Add"
            onClick={this.handleNoteAdd}
          />
        </div>
      </div>
    )
  }
}

export default NoteEditor;