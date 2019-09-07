import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

import Google from "../assets/google.png";

import "./LoginForm.sass";

class RegisterForm extends Component {
  constructor() {
    super();

    this.state = {
      btnText: "join",
      email: "",
      password: "",
      vpassword: "",
      success: false
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

  onChangeVPassword = e => {
    this.setState({
      vpassword: e.target.value
    });
  };

  resetRegisterBtn = () => {
    setTimeout(() => {
      this.setState(() => ({
        btnText: "join"
      }));
    }, 4000);
  };

  onRegister = async e => {
    console.log("SDf");
    e.preventDefault();
    // Grab state
    const { email, password, vpassword } = this.state;

    const user = await axios.post("/api/register", {
      email,
      password,
      vpassword
    });

    if (user.data.success) {
      this.setState({
        btnText: user.data.message,
        success: true
      });
    } else {
      this.setState({
        btnText: user.data.message
      });
      this.resetRegisterBtn();
    }
  };

  render() {
    const { btnText, email, password, vpassword } = this.state;

    if (this.state.success) {
      return <Redirect push to="/newUser" replace />;
    }

    return (
      <div className="loginForm">
        <h2 className="loginForm-heading">Join Intercessor</h2>
        <p className="loginForm-subheading">
          Already an Intercessor?
          <Link to="/">
            <span> Log in</span>
          </Link>
        </p>
        <input
          type="text"
          className="loginForm-input"
          placeholder="Add your Email"
          value={email}
          onChange={this.onChangeEmail}
        />
        <input
          type="password"
          className="loginForm-input"
          placeholder="Choose a Password"
          value={password}
          onChange={this.onChangePassword}
        />
        <input
          type="password"
          className="loginForm-input"
          placeholder="Confirm Password"
          value={vpassword}
          onChange={this.onChangeVPassword}
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
        <button className="loginForm-submit register" onClick={this.onRegister}>
          {btnText}
        </button>
      </div>
    );
  }
}

export default RegisterForm;
