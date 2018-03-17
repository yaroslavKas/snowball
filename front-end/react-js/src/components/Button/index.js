import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';

import buttonTypes from './buttonTypes';
import './Button.scss';

const Button = (props) => {
  const {
    className,
    type,
    onClick,
  } = props;

  return (
    <button
      className={classes('button', `button__${type}`, className)}
      onClick={onClick}
    >
      {props.name}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export {
  Button,
  buttonTypes
};
