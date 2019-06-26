import React from 'react';

const ProfilePostCreate = (props) => {
  return(
    <div className="network-profile__posts-create">
      <h3>My posts</h3>
      <textarea placeholder="Your news..."/>
      <button type="button">Send</button>
    </div>
  )
};

export default ProfilePostCreate;