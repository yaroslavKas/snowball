import React, { Component } from 'react';
import logo from "../../logo.svg";
import {NavLink} from "react-router-dom";
import './Header.scss'

class Header extends Component {
  render() {
    return(
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <NavLink exact activeClassName="active" to="/home">Home</NavLink>
      </header>
    )
  }

}

export default Header;
