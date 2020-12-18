import React from "react";
import "./night_icon_styles.css";

import clear from "../assets/cloudy.png";
import partly_cloudy_n from "../assets/partly_cloudy_n.png";
import cloudy from "../assets/cloudy.png";
import mist_n from "../assets/mist_n.png";
import patchy_rain_n from "../assets/patchy_rain_n .png";
import patchy_snow_n from "../assets/patchy_snow_n.png";
import light_snow from "../assets/light_snow.png";
import thundery_outbreaks_n from "../assets/thundery_outbreaks_n.png";
import light_rain_n from "../assets/light_rain_n.png";
import heavy_rain_n from "../assets/heavy_rain.png";
import snow_flake from "../assets/snow_flake.png";
import moderate_rain_n from "../assets/moderate_rain_n.png";
import heavy_rain_at_times_n from "../assets/heavy_rain_at_times_n.png";
import rain_thunder_n from "../assets/rain_thunder_n.png";

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
      case 1009:
        return cloudy;
        break;
      case 1030:
      case 1135:
      case 1147:
        return mist_n;
        break;
      case 1063:
      case 1150:
      case 1180:
        return patchy_rain_n;
        break;
      case 1066:
      case 1069:
      case 1210:
      case 1216:
        return patchy_snow_n;
        break;
      case 1079:
      case 1204:
      case 1207:
      case 1213:
      case 1237:
      case 1255:
        return light_snow;
        break;
      case 1087:
      case 1273:
        return thundery_outbreaks_n;
        break;
      case 1114:
      case 1117:
      case 1219:
      case 1222:
      case 1225:
      case 1258:
      case 1261:
      case 1264:
        return snow_flake;
        break;
      case 1153:
      case 1168:
      case 1183:
      case 1198:
        return light_rain_n;
        break;
      case 1171:
      case 1195:
      case 1252:
        return heavy_rain_n;
        break;
      case 1186:
      case 1189:
      case 1240:
        return moderate_rain_n;
        break;
      case 1192:
      case 1201:
      case 1243:
      case 1246:
      case 1249:
        return heavy_rain_at_times_n;
        break;
      case 1276:
      case 1279:
      case 1282:
        return rain_thunder_n;
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

// https://www.weatherapi.com/docs/weather_conditions.json

// https://www.iconfinder.com/iconsets/the-weather-is-nice-today
