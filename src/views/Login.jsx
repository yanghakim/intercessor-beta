import React, { Component } from "react";

import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from "../components/RegisterForm.jsx";

import Logo from "../assets/logo.png";

import "./Login.sass";

class Login extends Component {
  render() {
    return (
      <div class="login">
        <img src={Logo} class="login-logo" alt="logo" />

        <div class="login__wrapper">
          <div class="login__wrapper__left">
            <h1 class="login__wrapper__left-heading">
              JOIN THE MOST CRUCIAL MOVEMENT IN THE HISTORY OF MANKIND.
            </h1>
            <h1 class="login__wrapper__left-subheading">
              GET CONNECTED TO OTHER INTERCESSORS, PRAYER WARRIORS, AND SAINTS.
              <b>MAKE A DIFFERENCE IN YOUR HEART.</b>
            </h1>
          </div>
          {!this.props.register && <LoginForm />}
          {this.props.register && <RegisterForm />}
        </div>
      </div>
    );
  }
}

export default Login;
