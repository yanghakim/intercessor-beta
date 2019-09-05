import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Menu from "../assets/menu.png";
import Divider from "../assets/divider.png";
import Arrow from "../assets/arrow.png";

import "./Settings.sass";

class Settings extends Component {
  constructor() {
    super();

    this.state = {
      settingsClass: "settings",
      settingsNavClass: "settings__nav",
      settingsGroupsClass: "settings__groups",
      settingsInfoClass: "settings__userinfo",
      exit: false
    };

    this.onLeave = this.onLeave.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  onLeave() {
    this.setState({
      settingsClass: "settings exit",
      settingsNavClass: "settings__nav exit",
      settingsGroupsClass: "settings__groups exit",
      settingsInfoClass: "settings__userinfo exit"
    });

    setTimeout(() => {
      this.setState({
        exit: true
      });
    }, 2000);
  }

  render() {
    if (this.state.exit) {
      return <Redirect push to="/" />;
    }
    return (
      <div className={this.state.settingsClass}>
        <div className={this.state.settingsNavClass}>
          <div className="settings__nav__left">
            <img
              className="settings__nav__left-back"
              src={Arrow}
              onClick={this.goBack}
              alt="back"
            />

            <img src={Divider} alt="divider" />

            <img
              className="settings__nav__left-menu"
              src={Menu}
              onClick={this.onLeave}
              alt="menu"
            />
          </div>
          <h1 className="settings__nav-logout" onClick={this.handleLogout}>
            LOGOUT
          </h1>
        </div>

        <div className={this.state.settingsGroupsClass}>
          <div className="settings__groups__search">
            <h2>Groups.</h2>
            <p>Join, create, and view groups.</p>
            <h2>Join.</h2>

            <input
              placeholder="Search Groups"
              className="settings__groups__search-input"
            />

            <p> no results.</p>
          </div>
          <div className="settings__groups__create">
            <h2 className="settings__groups__view-heading">Create.</h2>
          </div>
          <div className="settings__groups__view">
            <h2 className="settings__groups__view-heading">View.</h2>
            <p className="settings__groups__view-item">
              [GCC] Grace Covenant Church
            </p>
            <p className="settings__groups__view-item">
              [GCC] Grace Covenant Church
            </p>
            <p className="settings__groups__view-item">
              [GCC] Grace Covenant Church
            </p>
            <p className="settings__groups__view-item">
              [GCC] Grace Covenant Church
            </p>
            <p className="settings__groups__view-item">
              [GCC] Grace Covenant Church
            </p>
          </div>
        </div>

        <div className={this.state.settingsInfoClass}>
          <input
            placeholder="Username"
            className="settings__userinfo-username"
          />
          <input
            placeholder="First Name"
            className="settings__userinfo-fname"
          />
          <label className="settings__userinfo-label">Change Password</label>
          <input
            placeholder="Choose a New Password"
            className="settings__userinfo-npass"
          />
          <input
            placeholder="Email Address"
            className="settings__userinfo-email"
          />
          <input placeholder="Last Name" className="settings__userinfo-lname" />
          <input
            placeholder="Enter Old Password"
            className="settings__userinfo-opass"
          />

          <input
            placeholder="Confirm New Password"
            className="settings__userinfo-cnpass"
          />
        </div>
      </div>
    );
  }
}

export default Settings;
