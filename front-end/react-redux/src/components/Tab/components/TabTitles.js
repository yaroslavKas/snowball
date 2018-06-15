import React from 'react';
import PropTypes from 'prop-types';

const TabTitles = (props) => {

  const {
    onclick,
    key,
    itemName
  } = props;

  return (
    <li key={key} onClick={onclick} >
      {itemName}
    </li>
  )
};

TabTitles.propTypes = {
  onclick: PropTypes.func,
  key: PropTypes.number,
  itemName: PropTypes.string,
};

export default TabTitles;