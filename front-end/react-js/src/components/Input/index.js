import React from 'react';
import PropTypes from 'prop-types';
import inputTypes from './inputTypes';
import classes from 'classnames';
import './Input.scss';

const Input = (props) => {

  const {
    className,
    inputClass,
    disabled,
    name,
    value,
    label,
    type,
    error,
    placeholder,
    others
  } = props;

  return (
    <label className="input">
      {error && <span className="input__error">{error}</span>}

      <span className="input__label">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        className={classes('input', `input__${inputClass}`,className)}
        onChange={props.onChange}
        placeholder={placeholder}
        {...others}
      />
    </label>
  );
};

Input.propTypes = {
  others: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]) ,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  inputClass: PropTypes.string,
  error: PropTypes.string,
};

export {
  Input,
  inputTypes
};