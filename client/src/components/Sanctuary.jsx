import React, { Component } from "react";

import Menu from "../assets/menu.png";
import Divider from "../assets/divider.png";
import Arrow from "../assets/arrow.png";

import "./Sanctuary.sass";

class Sanctuary extends Component {
  constructor() {
    super();

    this.state = {
      sanctuaryClass: "sanctuary",
      sanctuaryNavClass: "sanctuary__nav",
      exitTo: null
    };

    this.handleSettings = this.handleSettings.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  handleSettings() {
    this.onLeave();

    setTimeout(() => {
      this.setState({
        exitTo: "settings"
      });
    }, 2000);
  }

  handleLogout() {
    this.onLeave();

    setTimeout(() => {
      this.setState({
        exitTo: "logout"
      });
    }, 2000);
  }

  onLeave() {
    this.setState({
      sanctuaryClass: "sanctuary exit",
      sanctuaryNavClass: "sanctuary__nav exit"
    });
  }

  render() {
    return (
      <div className={this.state.sanctuaryClass}>
        <div className={this.state.sanctuaryNavClass}>
          <div className="sanctuary__nav__left">
            <img
              className="sanctuary__nav__left-back"
              src={Arrow}
              onClick={this.goBack}
              alt="arrow"
            />

            <img src={Divider} alt="divider" />

            <img
              className="sanctuary__nav__left-menu"
              src={Menu}
              onClick={this.handleSettings}
              alt="menu"
            />
          </div>
          <h1 className="sanctuary__nav-logout" onClick={this.handleLogout}>
            LOGOUT
          </h1>
        </div>

        <div className="sanctuary__prayer">
          <p className="sanctuary__prayer-prayer">
            Hi guys, asdfnsakdfsd. ... .. . .. . . . .. . . ....asdF:jsadlf
            lsakdjflks adjflkj aslkfjsalkd jfsjfl kjsadlkfjlksdj fksadjf lksadjf
            lkjkfjsaklfjlkasjlfksa
          </p>
        </div>

        <input
          className="sanctuary__add"
          type="text"
          placeholder="add more prayer topics"
        />
      </div>
    );
  }
}

export default Sanctuary;
