import React, { Component } from 'react';
import { Button, buttonTypes } from '../components/Button';
import SessionStore from '../stores/SessionStore';
import SessionActions from '../actions/SessionActions'
import image from '../assets/img/desk.png';
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

    // this.handleLogin = this.handleLogin.bind(this);
  }
  componentDidMount() {
    SessionStore.addChangeListener(this._onChange);

    // if (this.state.isLoggedIn) {
    //   this.redirectLoggenInUser();
    // }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isLoggedIn) {
      // this.redirectLoggenInUser();
      this.context.router.replace('/about');
    }
  }

  componentWillUnmount() {
    SessionStore.removeChangeListener(this._onChange);
  }

  // redirectLoggenInUser = () => {
  //   const {location} = this.props;
  //
  //   if (location.state && location.state.nextPathname) {
  //     this.context.router.replace(location.state.nextPathname);
  //   } else {
  //     this.context.router.replace('/lists');
  //   }
  // };

  handleLogin = () => {
    SessionActions.authorize()
  };

  render() {
    return (
      <div className="LoginPage">
        <div className="LoginPage__banner">
          <div className="LoginPage__text">
            <h1>Almost Google Tasks</h1>
            <p>Organize your life!</p>
            <Button
              type={buttonTypes.SECONDARY}
              name="login"
              onClick={this.handleLogin}
            />

          </div>
          <img src={image}
               alt="Login Google Tasks"
               className="LoginPage__image"/>
        </div>
      </div>
    );
  }

  _onChange = () => {
    this.setState(getStateFromFlux());
  }
}

// LoginPage.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };

export default LoginPage;
