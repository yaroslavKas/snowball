import React from 'react';
import PropTypes from 'prop-types';
import {Line} from 'rc-progress';
import moment from 'moment';
import {withRouter} from 'react-router-dom'
import Modal from "../../components/Modal/index";
import './getdevices.scss';
import Button from "../../components/Button/index";

class GetDevices extends React.Component {

  setTimeoutProgressConnect = null;

  state = {};

  getDevices = () => {
    if (this.setTimeoutProgressConnect) {
      clearTimeout(this.setTimeoutProgressConnect)
    }
    this.props.getDevices();
  };

  close = () => {
    if (this.setTimeoutProgressConnect) {
      clearTimeout(this.setTimeoutProgressConnect)
    }
    this.props.close()
  };

  render() {
    const {openModal, responseGetDevices, idsOfDevices, progressInPercent, progressInSeconds, stopGetDevices, openChanelWithDeviceId, history} = this.props;

    return (
      <Modal isOpen={openModal} close={this.close} showCloseIcon className="get-devices">
        <h2>Get devices</h2>
        <Button
          name="Get devices"
          onClick={this.getDevices}
        />
        <Button
          name="Stop"
          onClick={stopGetDevices}
        />
        <div className="get-devices__content">
          <div className="get-devices__server-response">
            <h4>Server responses</h4>
            <div className="get-devices__server-response__content">
              {
                responseGetDevices.map((item) => {
                  return (
                    <p key={item.id}>{item.value}</p>
                  )
                })
              }
            </div>
          </div>
          <div className="get-devices__server-response">
            <h4>Devices</h4>
            <div className="get-devices__devices__content">
              {
                idsOfDevices.map((item) => {
                  return (
                    <p role="presentation" onClick={()=>openChanelWithDeviceId(item.value, history)} key={`devices-values_${item.id}`}>{item.value}</p>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="get-devices__progress">
          {moment(progressInSeconds, 'ss').format('ss')}
          <Line
            percent={progressInPercent}
            strokeWidth="1"
            trailWidth="1"
            strokeColor="#61cb83"
            trailColor="#d8d8d8"
          />
        </div>
      </Modal>
    )
  }
}

GetDevices.propTypes = {
  progressInSeconds: PropTypes.number,
  progressInPercent: PropTypes.number,
  close: PropTypes.func,
  openModal: PropTypes.bool,
  responseGetDevices: PropTypes.array,
  idsOfDevices: PropTypes.array,
  getDevices: PropTypes.func,
  stopGetDevices: PropTypes.func,
  openChanelWithDeviceId: PropTypes.func,
  history: PropTypes.object,
};

export default withRouter(GetDevices);