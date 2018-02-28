import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <ul>
    <li>
      <Link to='/about'>About</Link>
    </li>
    <li>
      <Link to='/messages'>Messages</Link>
    </li>
  </ul>
);

export default Menu;