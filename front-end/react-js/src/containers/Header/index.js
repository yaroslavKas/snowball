import React from 'react';
import Logo from './components/Logo'
import Navigation from './components/Navigation';
// import Authentication from '../Authentication/index';

import './Header.scss';


const Header = () => (
  <header className="header">
    <Logo alt="logo" />
    <Navigation/>
  </header>
);

export default Header;
