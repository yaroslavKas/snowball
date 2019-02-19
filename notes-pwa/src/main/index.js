import React, { Component } from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import logo from '../logo.svg';
import Home from "../containers/home";
import rs from '../config/routes';

class App extends Component {
  render() {
    return (
      <main className="main">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavLink exact activeClassName="active" to="/home">Home</NavLink>
        </header>

        <div className="main__body">
          <Home />
        </div>
        <Switch>
          <Route
            exact
            path={rs.home}
            component={Home}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
