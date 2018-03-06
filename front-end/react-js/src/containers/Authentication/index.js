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
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  static propTypes = {
    isOpen:PropTypes.bool,
  };

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {

    return (
      <div className="authentication">
        <Login onClick={this.openModal}/>
        <Logout onClick={this.openModal}/>
        <Registration onClick={this.openModal} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="module__test"
        />
      </div>
    );
  }
}

export default Authentication;