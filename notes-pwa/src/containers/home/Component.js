import React, {Component} from 'react';
import NoteEditor from './components/NoteEditor';
import NoteGrid from './components/NoteGrid';
import './Home.scss';

// import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount = () => {
    this.props.setNotesFunction();
  };

  render() {

    const {
      notes,
      deleteNote
    } = this.props;

    return (
      <div className="notes">
        <NoteEditor
          setCreateFunction={this.props.setCreateFunction}
        />
        <NoteGrid
          notes={notes}
          deleteNote={deleteNote}
        />
      </div>
    )
  }
}

export default Home;