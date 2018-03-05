import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="menu">
    <ul className="menu__list">
      <li className="menu__item">
        <Link to='/about'>About</Link>
      </li>
      <li className="menu__item">
        <Link to='/messages'>Messages</Link>
      </li>
    </ul>
  </nav>

);

export default Navigation;