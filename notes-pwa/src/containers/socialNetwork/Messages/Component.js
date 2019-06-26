import React, {Component} from 'react';
import Message from './components/messages__item';

class NetworkMessages extends Component {
  render() {
    return(
      <div className="network-messages">
        <header className="network-messages__header">
          <h1>Dialogs</h1>
        </header>
        <section className="network-messages__friends">
          <p>Andrew</p>
          <p>Dmitry</p>
          <p>Dmitry</p>
          <p>Dmitry</p>
          <p>Dmitry</p>
          <p>Dmitry</p>
          <p>Dmitry</p>
          <p>Dmitry</p>
        </section>
        <section className="network-messages__list">
          <Message
            name="dmitry"
            message="I em a popover and I can have text and everything"
          />
          <Message
            name="dmitry"
            message="I em a popover and I can have text and everything"
          />
          <Message
            name="dmitry"
            message="I em a popover and I can have text and everything"
          />
          <Message
            name="dmitry"
            message="I em a popover and I can have text and everything"
          />
        </section>
      </div>
    )
  }
}

export default NetworkMessages;