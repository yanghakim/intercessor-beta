import React, { Component } from "react";

import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from "../components/RegisterForm.jsx";
import NewUserForm from "../components/NewUserForm.jsx";

import Logo from "../assets/logo.png";

import "./Login.sass";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <img src={Logo} className="login-logo" alt="logo" />

        <div className="login__wrapper">
          <div className="login__wrapper__left">
            <h1 className="login__wrapper__left-heading">
              JOIN THE MOST CRUCIAL MOVEMENT IN THE HISTORY OF MANKIND.
            </h1>
            <h1 className="login__wrapper__left-subheading">
              GET CONNECTED TO OTHER INTERCESSORS, PRAYER WARRIORS, AND SAINTS.
              <b>MAKE A DIFFERENCE IN YOUR HEART.</b>
            </h1>
          </div>
          {!this.props.register && !this.props.newUser && <LoginForm />}
          {this.props.register && !this.props.newUser && <RegisterForm />}
          {this.props.newUser && <NewUserForm />}
        </div>
      </div>
    );
  }
}

export default Login;
