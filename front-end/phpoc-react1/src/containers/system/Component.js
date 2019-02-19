import React from 'react';
import PropTypes from 'prop-types';
import {webSocketSend} from "../../main/webSocket/actions";
import Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import './system.scss';

class System extends React.Component {

  state = {
    command: '',
    commandsAnswers: [],
  };

  componentDidMount() {
    if (this.props.deviceId) {
      webSocketSend(`!OC${this.props.deviceId}\n\r`);
    }
  }

  componentWillReceiveProps(next) {

    const {password} = next.mainSettings;
    if (password) {
      if (next.deviceId && !next.openedChanel) {
        webSocketSend(`!OC${next.deviceId}\n\r`);
      } else if (next.deviceId && next.openedChanel && !next.deviceStatus) {
        webSocketSend('!ST\n\r')
      } else if (next.deviceId && next.openedChanel && next.deviceStatus && !next.confirmedPassword) {
        webSocketSend('!MA12345678\n\r');
      }

      if (next.confirmedPassword) {
        console.log('SETSTATE', next.commandsAnswers)
        this.setState({commandsAnswers: next.commandsAnswers})
      }
    }
  }

  renderPage = (props, state) => {
    const {confirmedPassword, deviceId} = props;
    const {commandsAnswers} = state;
    const {command} = this.state;
    if (confirmedPassword) {
      return (
        <div>
          <h3>Device {deviceId} connected</h3>
          <div className="system__send-command">
            <Input
              onChange={this.setCommand}
              value={command}
            />
            <Button
              name="Send"
              onClick={this.sendCommand}
            />
          </div>
          <div className="system__responses">
            {commandsAnswers.map((item) => {
              return (
                <p key={item.id}>{item.value}</p>
              )
            })}
          </div>
        </div>
      )
    }
    return null;
  };

  sendCommand = () => {
    const {command} = this.state;
    webSocketSend(`${command}\n\r`)
  };

  setCommand = (e) => {
    const {value} = e.target;
    this.setState({command: value})
  };

  render() {
    return (
      <div className="system">
        <h2>System</h2>
        {this.renderPage(this.props, this.state)}
      </div>
    )
  }
}

System.propTypes = {
  deviceId: PropTypes.string,
  confirmedPassword: PropTypes.bool,
  // commandsAnswers: PropTypes.array,
  // mainSettings: PropTypes.object,
  // openedChanel: PropTypes.string,
};

export default System