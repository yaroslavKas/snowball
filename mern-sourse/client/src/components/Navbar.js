import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logOutHandler = (e) => {
    e.preventDefault();
    auth.logOut();
    history.push('/')
  };

  return (
    <nav>
      <div>
        <span>Сокращение ссылок</span>
        <ul>
          <li><NavLink to="/create">Create</NavLink></li>
          <li><NavLink to="/links">List</NavLink></li>
          <li><a href="/" onClick={logOutHandler}>Log Out</a></li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;