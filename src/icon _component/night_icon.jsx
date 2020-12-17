import React from "react";
import "./night_icon_styles.css";

import clear from "../assets/cloudy.png";
import partly_cloudy_n from "../assets/partly_cloudy_n.png";
import cloudy from "../assets/cloudy.png";

function NightIcon({ code }) {
  const iconConfig = (code) => {
    switch (code) {
      case 1000:
        return clear;
        break;
      case 1003:
        return partly_cloudy_n;
        break;
      case 1006:
        return cloudy;
        break;
    }
  };

  return (
    <div className="night_icon_div">
      <img className="night_icon" src={iconConfig(code)} alt="weather icon" />
    </div>
  );
}

export default NightIcon;
