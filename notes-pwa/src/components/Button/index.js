import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';

const Button = (props) => {
  const {
    img,
    name,
    className,
    type,
    onClick,
    tooltip,
    dataHover,
    disabled,
  } = props;

  const typeClass = (type ? `button__${type}` : null);

  return (
    <button
      type="button"
      className={classes('button', typeClass, className)}
      onClick={onClick}
      data-hover={dataHover}
      disabled={disabled}
    >
      {tooltip ? <span className="tooltip">{tooltip}</span>: null}
      {name ?  <span>{name}</span>: null}
      { img ? <img src={img} alt="template" /> : null }
    </button>
  );
};

Button.propTypes = {
  img: PropTypes.string,
  name:PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  tooltip: PropTypes.string,
  type: PropTypes.string,
  dataHover: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;