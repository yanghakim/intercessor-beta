import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LoginForm.sass";

class RegisterForm extends Component {
  render() {
    return (
      <div class="loginForm">
        <h2 class="loginForm-heading">Join Intercessor</h2>
        <p class="loginForm-subheading">
          Already an Intercessor?
          <Link to="/login">
            <span> Log in</span>
          </Link>
        </p>
        <input
          type="text"
          class="loginForm-input"
          placeholder="Pick a Username"
        />
        <input
          type="text"
          class="loginForm-input"
          placeholder="Add your Email"
        />
        <input
          type="password"
          class="loginForm-input"
          placeholder="Choose a Password"
        />
        <input
          type="password"
          class="loginForm-input"
          placeholder="Confirm Password"
        />
        <div class="loginForm-checkbox">
          <input id="checkbox" type="checkbox" />
          <label for="checkbox">Keep me logged in</label>
        </div>
        <button type="submit" class="loginForm-submit register">
          join
        </button>
      </div>
    );
  }
}

export default RegisterForm;
