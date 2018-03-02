import React from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';

import buttonTypes from './buttonTypes';
import './Style.css';

const Button = (props) => {
  const {
    className,
    type,
    onClick,
    ...others,
  } = props;

  return (
    <button { ...others } className={ cl('Button', `Button__${type}`, className) } onClick={ onClick }>
      { props.name }
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
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
