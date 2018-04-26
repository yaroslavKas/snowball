import React from 'react';
import { Link } from 'react-router';

import './Navigation.scss';

const Navigation = () => (
  <nav className="menu">
    <ul className="menu__list">
      <li className="menu__item">
        <Link to='/about' activeClassName="active">About</Link>
      </li>
      {/*<li className="menu__item">*/}
        {/*<Link to='/messages'>Messages</Link>*/}
      {/*</li>*/}
      <li className="menu__item">
        <Link to='/tasks-list' activeClassName="active">Tasks list</Link>
      </li>
    </ul>
  </nav>

);

export default Navigation;