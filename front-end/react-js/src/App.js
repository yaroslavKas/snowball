import React, {Component} from 'react';
import load from './load';
import PropTypes from 'prop-types';
import logo from './logo.png';
import Menu from './Menu';
import Routers from './Routers';
import './App.scss';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount () {
    load('http://localhost:3000/posts').then(data => {
      const Data = JSON.parse(data);
      if (data) {
        this.setState({
          data: Data
        });
      }
      console.log(this.state.data);
    });
  }
  render() {
    return (
      <div className="mainLayout">
        <header className="header">
          <img src={logo} className="logo" alt="logo"/>
          <h1 className="title">Welcome to React</h1>
        </header>
        <Menu />
        <p className="intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Routers/>
      </div>

    );
  }
}

export default App;
