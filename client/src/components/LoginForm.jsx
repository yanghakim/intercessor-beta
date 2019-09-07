import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

import { connect } from "react-redux";
import { fetchUser } from "../actions";

import Google from "../assets/google.png";

import "./LoginForm.sass";

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      btnText: "login",
      email: "",
      password: "",
      success: false,
      user: null
    };
  }

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  resetLoginBtn = () => {
    setTimeout(() => {
      this.setState(() => ({
        btnText: "login"
      }));
    }, 4000);
  };

  onLogin = async e => {
    e.preventDefault();
    // Grab state
    let { email, password, user } = this.state;

    user = await axios.post("/api/login", {
      email: email,
      password: password
    });

    if (user.data.success) {
      this.props.fetchUser();
      setTimeout(() => {
        this.setState({
          btnText: user.data.message,
          success: true,
          user: user.data.user
        });
      }, 100);
    } else {
      this.setState({
        btnText: user.data.message
      });
      this.resetLoginBtn();
    }
  };

  render() {
    const { btnText, email, password, user } = this.state;

    if (this.state.success) {
      if (user.newUser) {
        return (
          <Redirect
            push
            to={{ pathname: "/newUser", state: { user: user } }}
            replace
          />
        );
      }
      return (
        <Redirect
          push
          to={{ pathname: "/home", state: { user: user } }}
          replace
        />
      );
    }

    return (
      <div className="loginForm">
        <h2 className="loginForm-heading">Login</h2>
        <p className="loginForm-subheading">
          Join the Fight.
          <Link to="/register">
            <span> Join</span>
          </Link>
        </p>
        <input
          type="email"
          className="loginForm-input"
          placeholder="Email"
          value={email}
          onChange={this.onChangeEmail}
        />
        <input
          type="password"
          className="loginForm-input"
          placeholder="Password"
          valie={password}
          onChange={this.onChangePassword}
        />
        <div className="loginForm-checkbox">
          <input id="checkbox" type="checkbox" />
          <label htmlFor="checkbox">Keep me logged in</label>
        </div>
        <a className="loginForm-google" href="/auth/google">
          <img
            className="loginForm-google-img"
            src={Google}
            width="20"
            alt="google"
          />
          login with Google
        </a>
        <button className="loginForm-submit" onClick={this.onLogin}>
          {btnText}
        </button>
        <p className="loginForm-forgot">Forgot your username or password?</p>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(LoginForm);
