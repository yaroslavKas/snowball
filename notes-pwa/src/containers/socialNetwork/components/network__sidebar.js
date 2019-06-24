import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import rs from '../../../config/routes'

class NetworkSidebar extends Component {
  render() {
    return(
      <nav>
        <NavLink activeClassName="active" to={rs.network.profile}>Profile</NavLink>
        <NavLink activeClassName="active" to={rs.network.messages}>Messages</NavLink>
        <NavLink activeClassName="active" to={rs.network.news}>News</NavLink>
        <NavLink activeClassName="active" to={rs.network.music}>Music</NavLink>
        <NavLink activeClassName="active" to={rs.network.settings}>Settings</NavLink>
      </nav>
    )
  }
}

export default NetworkSidebar;