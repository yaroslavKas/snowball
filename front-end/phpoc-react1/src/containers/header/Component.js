import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';
import Button from '../../components/Button';
import './header.scss';

class MainHeader extends React.Component {

  render() {
    const {showSettingsModal, openModalGetDevices} = this.props;
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>PHP OC TEST 47</h3>
        <div className="header-btn">
          <Button
            name="Settings"
            onClick={showSettingsModal}
          />
          <Button
            name="Get devices"
            onClick={openModalGetDevices}
          />
        </div>
      </header>
    )
  }
}

MainHeader.propTypes = {
  showSettingsModal: PropTypes.func,
  openModalGetDevices: PropTypes.func,
};

export default MainHeader