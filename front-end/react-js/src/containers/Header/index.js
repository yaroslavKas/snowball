import React,  {Component} from 'react';
import PropTypes from "prop-types";

import SessionActions from '../../actions/SessionActions';
import SessionStore from '../../stores/SessionStore';

import Logo from './components/Logo'
import Navigation from './components/Navigation';
import {Button, buttonTypes} from '../../components/Button';


// import Authentication from '../Authentication/index';

import './Header.scss';

class Header extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  onLogOut = () => {
    SessionActions.logout()
      .then(() => {
        if (!SessionStore.isLoggedIn()) {
          this.context.router.replace('/login');
        }
      });
  };

  render() {
    return (
      <header className="header">
        <Logo alt="logo"/>
        <Navigation/>
        <Button
          className="ion-plus"
          type={buttonTypes.ICON}
          onClick={this.onLogOut}
          name='onLogOut'
        />
      </header>
    )
  }
}

export default Header;
