import React, { Component } from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import logo from '../logo.svg';
import Home from "../containers/home";
import rs from '../config/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <NavLink exact activeClassName="active" to="/home">Home</NavLink>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Switch>
          <Route
            exact
            path={rs.home}
            component={Home}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
