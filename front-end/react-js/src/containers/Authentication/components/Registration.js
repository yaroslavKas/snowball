import React, {Component} from 'react';
import ButtonRegistration from './ButtonRegistration';
import Modal from '../../../components/Modal';
import { Button, buttonTypes } from '../../../components/Button';
import { Input, inputTypes } from '../../../components/Input';
import classes from 'classnames';
import load from "../../../load";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    };
    this.handlerRegistration = this.handlerRegistration.bind(this);
  }

  componentDidMount () {
    load('http://localhost:3000/profile').then(data => {
      const Data = JSON.parse(data);
      this.setState({
        data: Data
      });
      console.log(this.state.data);
    });
  }
  handlerRegistration() {

      let formData = new FormData(document.forms.person);

      // formData.append("patronym", "Робертович");
      //
      // let xhr = new XMLHttpRequest();
      // xhr.open("POST", "'http://localhost:3000/profile");
      // xhr.send(formData);
      console.log(formData);
  }

  render() {
    const {
      className,
    } = this.props;


    return (
      <div
        className={classes('authentication__registration', className)}
      >
        <ButtonRegistration onClick={this.props.onRequestOpen}/>
        <Modal
          isOpen={this.props.isOpen}
          onRequestClose={this.props.onRequestClose}
        >
          <form name='person'>
            <Input
              type='email'
              label='email'
              inputClass={inputTypes.email}
              placeholder='email'
            />
            <Input
              type='text'
              label='text'
              inputClass={inputTypes.text}
              placeholder='text'
            />
            <Button
              name='submit'
              type={buttonTypes.SECONDARY}
              onClick={this.handlerRegistration}
            />
          </form>
        </Modal>
      </div>
    );
  }
}

export default Login;