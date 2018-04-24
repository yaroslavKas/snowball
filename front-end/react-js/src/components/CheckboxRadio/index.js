import React from 'react';
import PropTypes from 'prop-types';
import uniqueHash from '../../utils/uniqueHash'
import CheckboxRadioTypes from './CheckboxRadioTypes';
import classes from 'classnames';
import './CheckboxRadioTypes.scss';

const CheckboxRadio = (props) => {

  const {
    className,
    inputClass,
    iconClass,
    disabled,
    name,
    value,
    label,
    type,
    error,
    others
  } = props;

  const classBlock = classes('input-block', `input-block__${inputClass}`, className);
  const classBlockIcon = classes('input-block__icon', iconClass);

  return (
    <div className={classBlock}>
      <input
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        className={className}
        onChange={props.onChange}
        {...others}
      />
      <label className="input-block__label">
        <p className="input-block__body">
          <span className={classBlockIcon}>icon</span>
        </p>
        <span className="input-block__label">{label}</span>
        {error && <span className="input__error">{error}</span>}
      </label>
    </div>
  );
};

CheckboxRadio.propTypes = {
  others: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  inputClass: PropTypes.string,
  error: PropTypes.string,
};

export {
  CheckboxRadio,
  CheckboxRadioTypes
};