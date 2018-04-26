import React, {Component} from 'react';

import {Button, buttonTypes} from "../../../components/Button";
import {Input, inputTypes} from "../../../components/Input";
import Modal from '../../../components/Modal';

class TaskCreateModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      notes: '',
      due: null
    };
  }

  handleClose = () => {
    const { onClose } = this.props;

    if (onClose) {
      onClose();
    }

    this.resetState();
  };

  handleSubmit = () => {
    const { onSubmit } = this.props;

    if (onSubmit) {
      onSubmit({ text: this.state.text, notes: this.state.notes, due: this.state.due });
    }

    this.resetState();
  };

  handleTextChangeText = (e) => {
    this.setState({ text: e.target.value });
  };
  //
  // handleTextChangeDesc = (e) => {
  //   this.setState({ notes: e.target.value });
  // };
  //
  // handleTextChangeDue = (e, date) => {
  //   this.setState({ due: date });
  // };
  //
  // disalbleDateBeforeNow(date) {
  //   const now = new Date();
  //   now.setUTCDate(now.getUTCDate() - 1);
  //   return date < now ;
  // }
  //
  resetState() {
    this.setState({ text: '', notes: '', due: null });
  }

  render() {
    const {text, notes} = this.state;
    const {isOpen} = this.props;
    const disabled =  (this.state.text ? buttonTypes.AUTHENTICATION : buttonTypes.DISABLED);

    return (


      <Modal
        isOpen={isOpen}
        onRequestClose={this.handleClose}
      >
        <h3 className="TaskCreateModal__modal-title">Add task</h3>
        <Input
          type='text'
          label='text'
          value={text}
          onChange={this.handleTextChangeText}
          inputClass={inputTypes.text}
          placeholder='Enter task description'
        />
        <Button
          name='Cancel'
          type={buttonTypes.AUTHENTICATION}
          onClick={this.handleClose}
        />
        <Button
          name='Submit'
          type={disabled}
          onClick={this.handleSubmit}
        />
      </Modal>
    );
  }

}

export default TaskCreateModal;