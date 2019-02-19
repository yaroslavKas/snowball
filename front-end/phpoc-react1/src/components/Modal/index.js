import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import classes from 'classnames';
import buttonTypes from '../Button/buttonTypes';
import Button from '../Button';
import './Modal.scss';

const modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    zIndex            : 98,

    backgroundColor   : 'rgba(255, 255, 255, 0.8)',
    overflowY         : 'auto'
  }
};

class Modal extends Component {
  static propTypes = {
    className:PropTypes.string,
    classModal:PropTypes.string,
    children: PropTypes.node,
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]),
    isOpen: PropTypes.bool.isRequired,
    showCloseIcon: PropTypes.bool,
    hideHeader: PropTypes.bool,
    closeOnEsc: PropTypes.bool,
    close: PropTypes.func.isRequired
  };

  static defaultProps = {
    hideHeader: false,
    closeOnEsc: true,
    title: '',
  };

  componentDidMount() {
    ReactModal.setAppElement('body');
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onEscape);
  }

  renderCloseButton = () => {
    const {close} = this.props;
    return (
      <Button
        type={buttonTypes.MODAL}
        className="button__icon ti-close"
        onClick={close}
      />
    );
  };

  render() {
    const {
      className,
      classModal,
      children,
      isOpen,
      showCloseIcon,
      close,
      ...others
    } = this.props;

    return (
      <ReactModal
        style={modalStyle}
        isOpen={ isOpen }
        ariaHideApp={ false }
        className={classes('modal', `modal__${classModal}`, className)}
        close={close}
        { ...others }
      >
        { showCloseIcon && this.renderCloseButton() }
        { children }
      </ReactModal>
    );
  }
}

export default Modal;
