import React, {Component} from 'react';
import Posts from './components/profile__posts';
import './network__profile.scss';

class NetworkProfile extends Component{
  render() {
    return (
      <div className="network-profile">
        <header className="network-profile__header">
          <img src="https://picsum.photos/id/237/1900/400" alt="img"/>
        </header>
        <section className="network-profile__group">
          <img src="https://picsum.photos/id/238/200/200" alt="img"/>
          <div>
            <h2>Dmitry K.</h2>
            <p>dsfdsfsd</p>R
            <p>dsfdsfdsf</p>
            <p>dsfdsfds</p>
            <p>dasfdsfdsf</p>
          </div>
        </section>
        <Posts
          data={this.props.content}
        />
      </div>
    )
  }
}

export default NetworkProfile;