import React, {Component} from 'react';

import PropTypes from 'prop-types';
import Modal from '../../components/Modal';
import Login from './components/Login';
import Logout from './components/Logout';
import Registration from './components/Registration';

class Authentication extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };

    this.handlerModal = this.handlerModal.bind(this);
  }

  static propTypes = {
    isOpen:PropTypes.bool,
    show:PropTypes.bool
  };

  handlerModal () {
    this.setState({
      isOpen: true
    });
  }

  render() {

    return (
      <div className="authentication">
        <Login/>
        <Logout/>
        <Registration onClick={this.handlerModal} />
        <Modal show={this.state.isOpen} />
      </div>
    );
  }
}

export default Authentication;