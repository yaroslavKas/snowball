import React from 'react';
import { Button, buttonTypes } from '../../../components/Button';

const Login = (props) => (
    <Button
      type={buttonTypes.SECONDARY}
      name="login"
      onClick={props.onClick}
    />

);

export default Login;