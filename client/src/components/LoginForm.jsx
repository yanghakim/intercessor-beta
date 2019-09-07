import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LoginForm.sass";

class LoginForm extends Component {
  render() {
    return (
      <div class="loginForm">
        <h2 class="loginForm-heading">Login</h2>
        <p class="loginForm-subheading">
          Join the Fight.
          <Link to="/register">
            <span> Join</span>
          </Link>
        </p>
        <input
          type="email"
          class="loginForm-input"
          placeholder="Email or Username"
        />
        <input type="password" class="loginForm-input" placeholder="Password" />
        <div class="loginForm-checkbox">
          <input id="checkbox" type="checkbox" />
          <label for="checkbox">Keep me logged in</label>
        </div>
        <Link class="loginForm-submit" to="/home">
          log in
        </Link>
        <p class="loginForm-forgot">Forgot your username or password?</p>
      </div>
    );
  }
}

export default LoginForm;
