import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { SectionsContainer, Section, Header, Footer } from "react-fullpage";

import Menu from "../assets/menu.png";
import Divider from "../assets/divider.png";
import Arrow from "../assets/arrow.png";

import HomeSection from "../components/HomeSection.jsx";

import "./Home.sass";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      homeClass: "home",
      homeNavClass: "home__nav",
      homeSelahClass: "home__selah",
      exitTo: null,
      headingText: "SELAH",
      subheadingText: "Examine your heart and intentions",
      buttonText: "intercede"
    };

    this.handleLogout = this.handleLogout.bind(this);
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

  handleLogout() {
    this.onLeave();

    setTimeout(() => {
      this.setState({
        exitTo: "logout"
      });
    }, 2000);
  }

  handleIntercede() {
    switch (this.props.location.hash) {
      case "#lion":
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
        }, 1000);
        break;

      case "#door":
        this.setState({
          homeSelahClass: "home__selah intercede"
        });

        setTimeout(() => {
          this.setState({
            exitTo: "sanctuary"
          });
        }, 1000);
        break;

      case "#sheep":
        this.setState({
          homeSelahClass: "home__selah intercede"
        });

        setTimeout(() => {
          this.setState({
            exitTo: "request"
          });
        }, 1000);
        break;
      default:
    }
  }

  onLeave() {
    this.setState({
      homeClass: "home exit",
      homeNavClass: "home__nav exit",
      homeSelahClass: "home__selah exit"
    });
  }

  render() {
    switch (this.state.exitTo) {
      case "intercede":
        return <Redirect push to="/prayers" />;
      case "sanctuary":
        return <Redirect push to="/sanctuary" />;
      case "request":
        return <Redirect push to="/request" />;
      case "settings":
        return <Redirect push to="/settings" />;
      case "logout":
        return <Redirect push to="/login" />;
      default:
        break;
    }

    let options = {
      sectionClassName: "section",
      anchors: ["lion", "door", "sheep"],
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      arrowNavigation: true
    };

    return (
      <div className={this.state.homeClass}>
        <Header>
          <div className={this.state.homeNavClass}>
            <div className="home__nav__left">
              <img
                className="home__nav__left-back"
                src={Arrow}
                onClick={this.goBack}
                alt="back"
              />

              <img src={Divider} alt="divider" />

              <img
                className="home__nav__left-menu"
                src={Menu}
                onClick={this.handleSettings}
                alt="menu"
              />
            </div>
            <h1 className="home__nav-logout" onClick={this.handleLogout}>
              LOGOUT
            </h1>
          </div>
        </Header>

        <SectionsContainer {...options}>
          <Section>
            <HomeSection page="lion" />
          </Section>
          <Section>
            <HomeSection page="door" />
          </Section>
          <Section>
            <HomeSection page="sheep" />
          </Section>
        </SectionsContainer>

        <Footer>
          <div className={this.state.homeSelahClass}>
            <div className="home__selah__content">
              <h2 className="home__selah__content-heading">
                {this.state.headingText}.
              </h2>
              <p className="home__selah__content-subheading">
                {this.state.subheadingText}.
              </p>
              <button
                className="home__selah__content-intercede"
                onClick={this.handleIntercede}
              >
                {this.state.buttonText}
              </button>
            </div>
          </div>
        </Footer>
      </div>
    );
  }
}

export default Home;
