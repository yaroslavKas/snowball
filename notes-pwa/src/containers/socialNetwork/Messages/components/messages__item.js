import React from 'react';

const MessagesItem = (props) => {
  const {name, message} = props;

  return(
    <div className="network-messages__item">
      <img src="https://picsum.photos/id/157/60/60" alt="img" />
      <p>{name}</p>
      <p>{message}</p>
    </div>
  )
};

export default MessagesItem;