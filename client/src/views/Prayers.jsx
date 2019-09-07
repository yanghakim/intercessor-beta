import React, { Component } from "react";

import PrayerBlurb from "../components/PrayerBlurb.jsx";

import Menu from "../assets/menu.png";
import Divider from "../assets/divider.png";
import Arrow from "../assets/arrow.png";

import "./Prayers.sass";

class Prayers extends Component {
  constructor() {
    super();

    this.state = {
      homeClass: "home",
      prayersNavClass: "prayers__nav",
      exitTo: null,
      headingText: "SELAH",
      subheadingText: "Examine your heart and intentions",
      buttonText: "intercede"
    };

    this.handleSettings = this.handleSettings.bind(this);
    this.handleIntercede = this.handleIntercede.bind(this);
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

  handleIntercede() {
    this.setState({
      homeSelahClass: "home__selah intercede",
      headingText: "PRAYER REQUESTS",
      subheadingText: "Select a request and intercede",
      buttonText: "select"
    });

    setTimeout(() => {
      this.setState({
        exitTo: "intercede"
      });
    }, 2000);
  }

  onLeave() {
    this.setState({
      homeClass: "home exit",
      homeNavClass: "home__nav exit",
      homeSelahClass: "home__selah exit"
    });
  }

  render() {
    return (
      <div className="prayers">
        <div className={this.state.prayersNavClass}>
          <div className="prayers__nav__left">
            <img
              className="prayers__nav__left-back"
              src={Arrow}
              onClick={this.goBack}
              alt="arrow"
            />

            <img src={Divider} alt="divider" />

            <img
              className="prayers__nav__left-menu"
              src={Menu}
              onClick={this.handleSettings}
              alt="menu"
            />
          </div>
          <h1 className="prayers__nav-logout" onClick={this.handleLogout}>
            LOGOUT
          </h1>
        </div>

        <span className="prayers-lines" />
        <span className="prayers-lines" />
        <span className="prayers-lines" />
        <span className="prayers-lines" />
        <span className="prayers-lines" />

        <div className="prayers__list">
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
          <PrayerBlurb />
        </div>

        <div className="prayers__leftfooter">
          <h2 className="prayers__leftfooter-heading">PRAYER REQUESTS.</h2>
          <p className="prayers__leftfooter-subheading">
            Select a request and intercede.
          </p>
          <button className="prayers__leftfooter-intercede">select</button>
        </div>

        <div className="prayers__rightfooter">
          <p className="prayers__rightfooter-heading">selected group:</p>
          <h2 className="prayers__rightfooter-subheading">
            Mandoo and Friends.
          </h2>
          <button className="prayers__rightfooter-choose">view by group</button>
        </div>
      </div>
    );
  }
}

export default Prayers;
