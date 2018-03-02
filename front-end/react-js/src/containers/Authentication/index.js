import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import Login from './components/Login';
import Logout from './components/Logout';

class Authentication extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <div className="authentication">
        <Login/>
        <Logout/>
      </div>
    );
  }
}

export default Authentication;