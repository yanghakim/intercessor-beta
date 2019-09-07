import React, { Component } from "react";
import Typist from "react-typist";

import "./HomeSection.sass";

class HomeSection extends Component {
  renderView() {
    switch (this.props.page) {
      case "lion":
        return (
          <div className="homeSection lion">
            <Typist cursor={{ show: false }}>
              <h1 className="homeSection-heading">pray for others</h1>
            </Typist>
          </div>
        );
      case "door":
        return (
          <div className="homeSection door">
            <Typist cursor={{ show: false }}>
              <h1 className="homeSection-heading door">pray with god</h1>
            </Typist>
          </div>
        );
      case "sheep":
        return (
          <div className="homeSection sheep">
            <Typist cursor={{ show: false }}>
              <h1 className="homeSection-heading sheep">request prayer</h1>
            </Typist>
          </div>
        );
      default:
        break;
    }
  }

  render() {
    return <div>{this.renderView()}</div>;
  }
}

export default HomeSection;
