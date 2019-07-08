import React from "react";

const Friend = (props) => {

  const {logo, name} = props;

  return (
    <figure className="network-friends__item">
      <p><img src={logo} alt={name} /></p>
      <figcaption>{name}</figcaption>
    </figure>
  )
};

export default Friend;