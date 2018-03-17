import React, {Component} from 'react';
import ButtonLogin from './ButtonLogin';
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
    this.handlerLogin = this.handlerLogin.bind(this);
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
  handlerLogin() {

  console.log(this.state.data);
  }

  render() {
    const {
      className,
    } = this.props;


    return (
      <div
        className={classes('authentication__login', className)}
      >
        <ButtonLogin onClick={this.props.onRequestOpen}/>
        <Modal
          isOpen={this.props.isOpen}
          onRequestClose={this.props.onRequestClose}
        >
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
            onClick={this.handlerLogin}
          />
        </Modal>
      </div>
    );
  }
}

export default Login;