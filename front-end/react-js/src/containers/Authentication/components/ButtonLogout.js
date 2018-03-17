import React from 'react';
import {Button, buttonTypes} from '../../../components/Button';

const Logout = (props) => (
  <Button
    type={buttonTypes.SECONDARY}
    name="Logout"
    onClick={props.onClick}
  />
);

export default Logout;