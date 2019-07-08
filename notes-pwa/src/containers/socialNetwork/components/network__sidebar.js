import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import rs from '../../../config/routes'
import Friend from './network__friend';
import './network__sidebar.scss';

const friends = [
  {
    name: "Koly",
    logo: "http://lorempixel.com/100/100/people/"
  },
  {
    name: "Ander",
    logo: "http://lorempixel.com/100/100/people/"
  },
  {
    name: "Jon",
    logo: "http://lorempixel.com/100/100/people/"
  }
];

class NetworkSidebar extends Component {
  render() {
    return(
      <aside className="network-sidebar">
        <nav className="network-nav">
          <NavLink className="network-nav-item" to={rs.network.profile}>Profile</NavLink>
          <NavLink className="network-nav-item" to={rs.network.messages}>Messages</NavLink>
          <NavLink className="network-nav-item" to={rs.network.news}>News</NavLink>
          <NavLink className="network-nav-item" to={rs.network.music}>Music</NavLink>
          <NavLink className="network-nav-item" to={rs.network.settings}>Settings</NavLink>
        </nav>
        <div className="network-friends">
          <h3 className="network-friends__title">Friends</h3>
          {
            friends.map((item, index) => {
              return (
                <Friend
                  key={index}
                  name={item.name}
                  logo={item.logo}
                />
              )
            })
          }
        </div>
      </aside>

    )
  }
}

export default NetworkSidebar;