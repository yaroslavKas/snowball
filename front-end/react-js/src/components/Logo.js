import React from 'react';
import logo from '../assets/img/logo.png';

const Logo = (props) => (
  <figure className="logo">
    <h1 className="logo__body"><img src={logo} alt={props.alt}/></h1>
  </figure>
);

export default Logo;