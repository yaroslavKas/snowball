import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Route, Switch} from "react-router-dom";
import '../App.css';
import rs from '../config/routes';
import Header from '../containers/header';
import MainSettings from '../containers/settings';
import Devices from '../containers/devices';
import Home from '../containers/home';
import System from '../containers/system';

class App extends Component {

  componentDidMount() {
    this.props.getDefaultSettings();
    this.props.getXml();
  }

  render() {
    return (
      <main className="App">
        <Header />

        <Switch>
          <Route
            exact
            path={rs.home}
            component={Home}
          />
          <Route
            path={rs.system}
            component={System}
          />
        </Switch>
        <MainSettings />
        <Devices />
      </main>
    );
  }
}

App.propTypes = {
  getXml: PropTypes.func,
  getDefaultSettings: PropTypes.func,
};

export default App;