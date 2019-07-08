import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import rs from '../../../config/routes'
// import Message from './components/messages__item';


const data = [
  {
    name: "andrew",
    id: 1
  },
  {
    name: "andrew2",
    id: 2
  },
  {
    name: "andrew3",
    id: 3
  },
  {
    name: "andrew4",
    id: 4
  }
];


class NetworkMessages extends Component {
  render() {
    return(
      <div className="network-messages">
        <header className="network-messages__header">
          <h1>Dialogs</h1>
        </header>
        <section className="network-messages__friends">
          {
            data.map((item) => {
              return (
                <NavLink to={rs.network.messages + '/' + item.id}>{item.name}</NavLink>
              )
            })
          }
        </section>
        <section className="network-messages__list">
          <p>dfdsf</p>
        </section>
      </div>
    )
  }
}

export default NetworkMessages;