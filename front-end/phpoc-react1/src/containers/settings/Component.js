import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../components/Modal';
import './settings.scss';
import Input from "../../components/Input/index";
import Button from "../../components/Button/index";

class MainSettings extends React.Component {

  state = {
    ip: '',
    port: '',
    password: ''
  };

  componentDidMount() {
    this.setState({
      ip: this.props.ip || '',
      port: this.props.port || '',
      password: this.props.password || '',
    })
  }

  componentWillReceiveProps(next) {
    this.setState({
      ip: next.ip || '',
      port: next.port || '',
      password: next.password || '',
    })
  }

  inputOnChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  };

  save = () => {
    const {ip, port, password} = this.state;
    this.props.saveWsSettings({ip, port, password})
  };

  render() {
    const {isOpen, close, isConnected} = this.props;
    const {ip, port, password} = this.state;
    return (
      <Modal isOpen={isOpen} close={close} showCloseIcon className="main-settings__content">
        <div>
          <h3>Main settings</h3>
          {isConnected && <h4 style={{color: 'green'}}>Connected !</h4>}
          <div>
            <Input
              label="IP"
              onChange={this.inputOnChange}
              name="ip"
              value={ip}
            />
            <Input
              label="Port"
              onChange={this.inputOnChange}
              name="port"
              value={port}
            />
            <Input
              label="Password"
              onChange={this.inputOnChange}
              name="password"
              value={password}
            />
            <Button
              name="Save and connect"
              onClick={this.save}
            />
          </div>
        </div>
      </Modal>
    )
  }
}

MainSettings.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  saveWsSettings: PropTypes.func,
  ip: PropTypes.string,
  port: PropTypes.number,
  password: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  isConnected: PropTypes.bool,
};

export default MainSettings;