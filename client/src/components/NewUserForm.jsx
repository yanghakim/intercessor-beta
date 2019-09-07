import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { fetchUser } from "../actions";

import "./NewUserForm.sass";

class NewUserForm extends Component {
  constructor() {
    super();

    this.state = {
      btnText: "enter >",
      firstName: "",
      lastName: "",
      acronym: "",
      gender: "",
      transition: false,
      newUserClass: "newUser"
    };
  }

  componentWillMount() {
    this.props.fetchUser();
  }

  onChangeFName = e => {
    this.setState({
      firstName: e.target.value,
      acronym:
        e.target.value.substring(0, 1) + this.state.lastName.substring(0, 1)
    });
  };

  onChangeLName = e => {
    this.setState({
      lastName: e.target.value,
      acronym:
        this.state.firstName.substring(0, 1) + e.target.value.substring(0, 1)
    });
  };

  onChangeAcronym = e => {
    this.setState({
      acronym: e.target.value
    });
  };

  onChangeGender = e => {
    this.setState({
      gender: e.target.value
    });
  };

  resetSubmitBtn = () => {
    setTimeout(() => {
      this.setState(() => ({
        btnText: "enter >"
      }));
    }, 4000);
  };

  onSubmit = async () => {
    // Grab state
    const { firstName, lastName, church, acronym, gender } = this.state;

    const email = this.props.auth.email;

    const updateUser = await axios.post("/api/new_user", {
      firstName,
      lastName,
      church,
      acronym,
      gender,
      email
    });

    if (updateUser.data.success) {
      this.setState({
        btnText: updateUser.data.message,
        newUserClass: "newUser"
      });
      setTimeout(() => {
        this.setState(() => ({
          transition: true
        }));
      }, 1000);
    } else {
      this.setState({
        btnText: updateUser.data.message
      });
      this.resetSubmitBtn();
    }
  };

  render() {
    const { btnText, firstName, lastName, acronym } = this.state;

    if (this.state.transition) {
      return <Redirect push to="/home" replace />;
    }

    return (
      <div className={this.state.newUserClass}>
        <input
          type="text"
          className="newUser-input"
          placeholder="first name"
          value={firstName}
          onChange={this.onChangeFName}
        />
        <input
          type="text"
          className="newUser-input"
          placeholder="last name"
          value={lastName}
          onChange={this.onChangeLName}
        />
        <input
          type="text"
          className="newUser-input"
          placeholder="user acronym (abc123)"
          value={acronym}
          onChange={this.onChangeAcronym}
          maxLength="6"
        />
        <div className="newUserForm__buttons">
          <input
            className="newUserForm__buttons-btn"
            type="radio"
            name="gender"
            id="male"
            value="brother"
            onChange={this.onChangeGender}
          />
          <label htmlFor="male">male</label>
          <input
            className="newUserForm__buttons-btn"
            type="radio"
            name="gender"
            id="female"
            value="sister"
            onChange={this.onChangeGender}
          />
          <label htmlFor="female">female</label>
        </div>

        <button
          className="newUser-submit"
          type="submit"
          onClick={this.onSubmit}
        >
          {btnText}
        </button>
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
)(NewUserForm);
