import React from "react";

const Post = (props) => {

  const {message, like} = props;

  return (
    <li className="network-profile__posts-item">
      <img src="https://picsum.photos/id/239/100/100" alt="img" />
      <p>{message}</p>
      <p>{like}</p>
    </li>
  )
};

export default Post;