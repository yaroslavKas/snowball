import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Authentication from './Authentication/index';

import './Header.scss';


const Header = () => (
  <header className="header">
    <Logo alt="logo" />
    <Navigation/>
    <Authentication/>
  </header>
);

export default Header;
