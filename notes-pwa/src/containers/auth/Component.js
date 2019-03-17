import React, {Component} from 'react';
import Registration from './components/registration';
import Login from './components/login';

class Auth extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   }
  // }


  render() {

    const {
      registrationFunction,
      loginFunction,
      login
    } = this.props;

    return (
      <div>

        <Registration
          registrationFunction={registrationFunction}
        />
        <Login
          login={login}
          loginFunction={loginFunction}
        />
      </div>
    )
  }
}

export default Auth;