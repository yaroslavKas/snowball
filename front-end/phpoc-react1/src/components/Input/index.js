import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';

const Input = (props) => {

  const {
    autocomplete,
    className,
    disabled,
    others,
    name,
    value,
    label,
    type,
    error,
    placeholder,
    onChange,
    required,
    icon,
    stars
  } = props;

  return (
    <div className={classes('input-block', `input-block__${type}`, className)}>
      {
        label && (
          <span
            className={
              classes('input-block__label', required && `input-block__label-${required}`)
            }
          >
            {label}
            { stars && <span className={stars}>*</span> }
          </span>
      )}

      <div className={classes("input-block_wrap", {active: icon})}>
        {icon && (<i className={`input-block__icon ${icon}`} aria-hidden="true" />)}
        <input
          type={type}
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autocomplete}
          stars={stars}
          {...others}
        />
      </div>
      {
        error &&
        (
          <span className="error-block">
              {error}
          </span>
        )
      }
    </div>
  );
};

Input.propTypes = {
  autocomplete: PropTypes.string,
  others: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  subTitle: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  required: PropTypes.string,
  icon: PropTypes.string,
  error: PropTypes.string,
  stars: PropTypes.string,
};

Input.defaultProps = {
  autocomplete: 'on',
  type: 'text',
  value: ''
};

export default Input;