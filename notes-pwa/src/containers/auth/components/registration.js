import React, {Component} from 'react';
import Input from "../../../components/Input";
import Button from "../../../components/Button";

class Registration extends Component {
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
    this.props.registrationFunction(data);
  };

  render() {

    const { email, password} = this.state;

    return(
      <div>
        <div className="auth__registration">
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
      </div>
    )
  }
}

export default Registration;