import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import rs from '../config/routes';
import Header from '../containers/header';
import Auth from '../containers/auth';
import Home from '../containers/home';
import socialNetwork from '../containers/socialNetwork';
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
            // path={}
            component={Home}
          />
          <Route
            path={rs.network.home}
            component={socialNetwork}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
