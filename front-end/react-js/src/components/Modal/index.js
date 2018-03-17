import React, {Component} from 'react';
import ReactModal from 'react-modal';
import {Button, buttonTypes} from '../Button';
import classes from 'classnames';

import './Modal.scss';


const modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    zIndex           : 9999,
    backgroundColor   : 'rgba(0, 0, 0, 0.75)'
  }
};

class Modal extends Component {

  componentDidMount() {
    ReactModal.setAppElement('body');
  }

  render() {
    const {
      className,
      children,
      ...others,
    } = this.props;

    return (
      <ReactModal
        style={modalStyle}
        className={classes('modal', className)}
        {...others}
      >
        <Button
          type={buttonTypes.SECONDARY}
          className='ion-close-round'
          onClick={this.props.onRequestClose}
        />
        { children }
      </ReactModal>
    )
  }
}

export default Modal;
