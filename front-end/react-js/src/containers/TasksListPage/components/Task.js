import React, {Component} from 'react';
import {CheckboxRadio, CheckboxRadioTypes} from '../../../components/CheckboxRadio';

class Task extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   isEditing: false
    // };
  }

  handleCheck = () => {
    this.props.onStatusChange({
      isCompleted: !this.props.isCompleted
    });
  };

  render() {
    const {text, notes, due, isCompleted} = this.props;
    return (
      <CheckboxRadio
        type='checkbox'
        name='radio-name'
        label={this.props.text}
        iconClass='ion-checkmark not-font-size'
        checked={isCompleted}
        onChange={this.handleCheck}
        inputClass={CheckboxRadioTypes.CHECKBOX}
      />
    )
  }
}

export default Task;