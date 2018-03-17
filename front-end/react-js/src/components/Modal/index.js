import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
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
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isOpen: false
  //   }
  // }

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
        <button onClick={this.props.onRequestClose}>Open Modal</button>
        { children }
      </ReactModal>
    )
  }
}

export default Modal;
