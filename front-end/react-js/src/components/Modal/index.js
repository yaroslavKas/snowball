import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';

import './Modal.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isOpen: false
    // }
  }
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const {
      className,
      show,
      ...others,
    } = this.props;

    return (
      <div
        {...others}
        className={classes('modal', {'modal__show': show}, className)}
      >
        <form>
          <input type="text"/>
        </form>
      </div>
    )
  }
}

export default Modal;