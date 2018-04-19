import React, { Component } from 'react';
import { Button, buttonTypes } from '../../components/Button/index';
import PropTypes from 'prop-types';

import SessionStore from '../../stores/SessionStore';
import SessionActions from '../../actions/SessionActions'
import image from '../../assets/img/desk.png';

import './LoginPage.scss';

const getStateFromFlux = () => {
  return {
    isLoggedIn: SessionStore.isLoggedIn()
  }
};


class LoginPage extends Component {
  constructor(props, context){
    super(props, context);
    this.state = getStateFromFlux();
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentDidMount() {
    SessionStore.addChangeListener(this._onChange);

    // if (this.state.isLoggedIn) {
    //   this.redirectLoggenInUser();
    // }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isLoggedIn) {
      // this.context.router.replace('/about');
      const {location} = this.props;

      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname);
      } else {
        this.context.router.replace('/home');
      }
    }

  }

  componentWillUnmount() {
    SessionStore.removeChangeListener(this._onChange);
  }

  handleLogin = () => {
    SessionActions.authorize()
  };

  render() {
    return (
      <div className="login-page">
        <div className="login-page__banner">
          <div className="login-page__body">
            <h1 className="login-page__title">You can everything "Snowball"</h1>
            <p className="login-page__title-sub">Organize your life!</p>
            <Button
              type={buttonTypes.AUTHENTICATION}
              name="Login"
              onClick={this.handleLogin}
            />
          </div>
          <img src={image}
               alt="Login Google Tasks"
               className="login-page__image"/>
        </div>
      </div>
    );
  }

  _onChange = () => {
    this.setState(getStateFromFlux());
  }
}

export default LoginPage;
