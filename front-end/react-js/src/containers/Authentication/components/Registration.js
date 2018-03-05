import React from 'react';
import {Button, buttonTypes} from '../../../components/Button';


const Registration = (props) => (
  <Button
    type={buttonTypes.SECONDARY}
    name="Registration"
    onClick={props.onClick}
  />
);

export default Registration;