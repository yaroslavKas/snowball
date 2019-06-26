import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import rs from '../../../config/routes'
import './network__sidebar.scss';

class NetworkSidebar extends Component {
  render() {
    return(
      <nav className="network-nav">
        <NavLink className="network-nav-item" to={rs.network.profile}>Profile</NavLink>
        <NavLink className="network-nav-item" to={rs.network.messages}>Messages</NavLink>
        <NavLink className="network-nav-item" to={rs.network.news}>News</NavLink>
        <NavLink className="network-nav-item" to={rs.network.music}>Music</NavLink>
        <NavLink className="network-nav-item" to={rs.network.settings}>Settings</NavLink>
      </nav>
    )
  }
}

export default NetworkSidebar;