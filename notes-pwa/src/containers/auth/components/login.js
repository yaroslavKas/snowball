import React, {Component} from 'react';
import Input from "../../../components/Input";
import Button from "../../../components/Button";

class Login extends Component {
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
  };

  handleSubmit = () => {
    const data = {...this.state};
    this.props.loginFunction(data);
  };

  render() {

    const {
      email,
      password,
    } = this.state;

    if (this.props.login) {
      console.log(this.props.login)
    }

    return(
      <div className="auth__login">
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
          name="Login"
          onClick={this.handleSubmit}
        />
      </div>
    )
  }
}

export default Login;