import React, {Component} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({
      [name]: value,
    });

    console.log('email',this.state.email)
    console.log('password', this.state.password)
  };

  handleSubmit = () => {
    const data = {...this.state};
    console.log(data);

    this.props.registrationFunction(data);
    console.log(this.props.auth)
  };

  render() {

    const {
      email,
      password,
    } = this.state;

    return (
      <div>
        <Input
          name="email"
          type="email"
          value={email}
          palceholder="Email"
          onChange={this.handleChange}
        />
        <Input
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={this.handleChange}
        />
        <Button
          name="Registration"
          onClick={this.handleSubmit}
        />
      </div>
    )
  }
}

export default Auth;