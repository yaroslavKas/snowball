import React, {Component} from 'react';
import ButtonLogin from './ButtonLogin';
import Modal from '../../../components/Modal';
import classes from 'classnames';

class Login extends Component {
  constructor(props) {
    super(props)

  }
  test() {
    console.log('test');
  }

  render() {
    const {
      className,
    } = this.props;


    return (
      <div
        className={classes('authentication__login', className)}
      >
        {/*<ButtonLogin onClick={this.test}/>*/}
        <ButtonLogin onClick={this.props.onRequestOpen}/>
        <Modal
          isOpen={this.props.isOpen}
          onRequestClose={this.props.onRequestClose}
        >
          <p>tetcecvdev</p>
        </Modal>
      </div>
    );
  }
}

export default Login;