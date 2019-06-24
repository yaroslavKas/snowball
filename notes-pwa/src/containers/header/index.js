import React, { Component } from 'react';
import logo from "../../logo.svg";
import {NavLink} from "react-router-dom";
import rs from '../../config/routes';
import './Header.scss'

class Header extends Component {
  render() {
    return(
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <NavLink exact activeClassName="active" to={rs.home}>Home</NavLink>
        <NavLink  activeClassName="active" to={rs.network.home}>Social network</NavLink>
      </header>
    )
  }

}

export default Header;
