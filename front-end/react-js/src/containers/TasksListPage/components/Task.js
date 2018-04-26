import React, {Component} from 'react';
import {CheckboxRadio, CheckboxRadioTypes} from '../../../components/CheckboxRadio';
import {Button, buttonTypes} from '../../../components/Button';
import {Input, inputTypes} from '../../../components/Input';

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      valueTask: this.props.text
    };
  }

  handleEdit = () => {
    this.setState({isEditing: true});
  };

  // handleCancel = () => {
  //   this.cancelTask();
  // };
  //
  // handleSave = () => {
  //   this.saveTask();
  // };

  handleCheck = () => {
    this.props.onStatusChange({
      isCompleted: !this.props.isCompleted
    });
  };

  // handleDelete = () => {
  //   this.props.onDelete();
  // };

  handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY) {
      this.saveTask();
    }
    if (e.keyCode === ESCAPE_KEY) {
      this.cancelTask();
    }
  };

  saveTask = () => {
    this.props.onUpdate({
      text: this.state.valueTask
      // notes: this.textarea.value,
      // due: this.due.state.date
    });

    this.setState({isEditing: false});
  };

  cancelTask = () => {
    this.setState({
      isEditing: false,
      valueTask: this.props.text
    });
  };

  // disalbleDateBeforeNow(date) {
  //   const now = new Date();
  //   now.setUTCDate(now.getUTCDate() - 1);
  //   return date < now;
  // }

  // renderDue() {
  //   if (this.props.due) {
  //     return moment(this.props.due).format('LL');
  //   } else {
  //     return '';
  //   }
  // }
  handleChangeValueTask= (e) => {
    this.setState({valueTask: e.target.value});
  };

  render() {
    const {text, notes, due, isCompleted} = this.props;
    return (
      this.state.isEditing
        ?
          <li role="presentation" onKeyDown={this.handleKeyDown}>
            <Input
              type='text'
              value={this.state.valueTask}
              onChange={this.handleChangeValueTask}
              onKeyDown={this.handleKeyDown}
            />
            <Button
              name="cancel"
              // type={buttonTypes.ICON}
              // className="ion-android-create"
              onClick={this.cancelTask}
            />
            <Button
              name="save"
              // type={buttonTypes.ICON}
              // className="ion-android-create"
              onClick={this.saveTask}
            />
          </li>
        :
        <li className="task-lists-page__tasks-item">
          <CheckboxRadio
            type='checkbox'
            name='radio-name'
            label={this.props.text}
            iconClass='ion-checkmark not-font-size'
            checked={isCompleted}
            onChange={this.handleCheck}
            inputClass={CheckboxRadioTypes.CHECKBOX}
          />
          {/*<Button*/}
            {/*type={buttonTypes.ICON}*/}
            {/*className="ion-android-more-vertical"*/}
          {/*/>*/}
          <Button
            type={buttonTypes.ICON}
            className="ion-android-create"
            onClick={this.handleEdit}
          />

        </li>
    )
  }
}

export default Task;