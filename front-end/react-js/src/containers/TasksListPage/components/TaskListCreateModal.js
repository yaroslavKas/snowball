import React, { Component } from 'react';

import { Button, buttonTypes } from "../../../components/Button";
import { Input, inputTypes } from "../../../components/Input";
import Modal from '../../../components/Modal';
import classes from 'classnames';

class TaskListCreateModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    // this.handleClose = this.handleClose.bind(this);
  }

  handleClose = () => {
    const { onClose } = this.props;

    this.setState({ name: '' });

    if (onClose) {
      onClose("creating");
    }
  };

  handleSubmit = () => {
    const { onSubmit } = this.props;

    if (onSubmit) {
      onSubmit({ name: this.state.name });
    }

    this.setState({ name: '' });
  };

  handleTextChange = (e) => {
    this.setState({ name: e.target.value });
    console.log(e.target.value);
  };

  render() {
    const { name } = this.state;
    const { isOpen } = this.props;
    const disabled =  (this.state.name ? buttonTypes.AUTHENTICATION : buttonTypes.DISABLED);
    // const className = classes('authentication__login', className);

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={this.handleClose}
      >
        <Input
          type='text'
          label='text'
          value={name}
          onChange={this.handleTextChange}
          inputClass={inputTypes.text}
          placeholder='text'
        />
        <Button
          name='submit'
          type={buttonTypes.AUTHENTICATION}
          onClick={this.handleSubmit}
        />
        <Button
          name='Cancel'
          type={disabled}
          onClick={this.handleClose}
        />
      </Modal>
    );
  }

}

export default TaskListCreateModal;