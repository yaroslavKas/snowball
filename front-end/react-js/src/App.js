import React, {Component} from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main className="basic-block">
        {this.props.children}
      </main>
    );
  }
}

export default App;
