import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import rs from '../config/routes';
import Header from '../containers/header';
import Home from '../containers/home';
import Auth from '../containers/auth';
import './Main.scss';
// import rs from '../config/routes';

class App extends Component {
  render() {
    return (
      <main className="main">
        <Header />
        <Auth />

        <div className="main__section main__section_width">
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
