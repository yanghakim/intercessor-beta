import React, { Component } from "react";

import Menu from "../assets/menu.png";
import Divider from "../assets/divider.png";
import Arrow from "../assets/arrow.png";

import "./RequestPrayer.sass";

class Request extends Component {
  render() {
    return (
      <div className="request">
        <div className="request__nav">
          <div className="request__nav__left">
            <img
              className="request__nav__left-back"
              src={Arrow}
              onClick={this.goBack}
              alt="arrow"
            />

            <img src={Divider} alt="divider" />

            <img
              className="request__nav__left-menu"
              src={Menu}
              onClick={this.handleSettings}
              alt="menu"
            />
          </div>
          <h1 className="request__nav-logout" onClick={this.handleLogout}>
            LOGOUT
          </h1>
        </div>

        <p className="request-prayer">
          Hi guys, asdfnsakdfsd. ... .. . .. . . . .. . . ....asdF:jsadlf
          lsakdjflks adjflkj aslkfjsalkd jfsjfl kjsadlkfjlksdj fksadjf lksadjf
          lkjkfjsaklfjlkasjlfksa
        </p>

        <input
          className="request__add"
          type="text"
          placeholder="add more prayer topics"
        />
      </div>
    );
  }
}

export default Request;
