import React from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';

import buttonTypes from './buttonTypes';
import './Button.scss';

const Button = (props) => {
  const {
    className,
    type,
    onClick,
    ...others,
  } = props;

  return (
    <button
      {...others}
      className={cl('button', `button__${type}`, className)}
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

Button.defaultProps = {
  type: 'default'
};

export {
  Button,
  buttonTypes
};
