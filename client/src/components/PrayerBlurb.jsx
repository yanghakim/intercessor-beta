import React, { Component } from "react";

import "./PrayerBlurb.sass";

class PrayerBlurb extends Component {
  render() {
    return (
      <div className="prayerblurb">
        <p className="prayerblurb-date">7/9/19</p>
        <h2 className="prayerblurb-title">Pray for Exam</h2>
        <p className="prayerblurb-user">Yangha Kim</p>
      </div>
    );
  }
}

export default PrayerBlurb;
