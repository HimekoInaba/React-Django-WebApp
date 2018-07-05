import React, { Component } from "react";
import "./LoginForm.css"

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      email: "",
      password: "",
      confirmPassword: ""
    };

    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    this.setState(() => {
      return {
        login: this.login.value,
        email: this.email.value,
        password: this.password.value,
        confirmPassword: this.confirmPassword.value
      };
    });

    console.log(this.state.login);

    e.preventDefault();
  }

  send(credentials) {
    fetch('https://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      credentials
    })
})
  }

  render() {
    return (
      <div className="loginPageMain">
        <div className="form">
          <form onSubmit={this.authorize}>
            <input type="text" id="login" name="login"
                   placeholder="Login"
                    ref={(a) => this.login = a}/><br/>
            <input type="email" id="email" name="email"
                   placeholder="Email"
                   ref={(a) => this.email = a}/><br/>
            <input type="password" id="password" name="password"
                   placeholder="Password"
                   ref={(a) => this.password = a}/><br/>
            <input type="password" id="confirmPassword" name="confirmPassword"
                   placeholder="Confirm password"
                   ref={(a) => this.confirmPassword = a}/><br/>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }

}

export default LoginPage;
