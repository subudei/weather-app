import React from "react";
import "./day_icon_styles.css";

import sunny from "../assets/sunny.png";
import partly_cloudy from "../assets/partly_cloudy.png";
import cloudy from "../assets/cloudy.png";
import mist from "../assets/mist.png";
import patchy_rain from "../assets/patchy_rain.png";
import patchy_snow from "../assets/patchy_snow.png";
import light_snow from "../assets/light_snow.png";
import thundery_outbreaks from "../assets/thundery_outbreaks.png";
import snow_flake from "../assets/snow_flake.png";
import light_rain from "../assets/light_rain.png";
import heavy_rain from "../assets/heavy_rain.png";
import moderate_rain from "../assets/moderate_rain.png";
import heavy_rain_at_times from "../assets/heavy_rain_at_times.png";
import rain_thunder from "../assets/rain_thunder.png";

function DayIcon({ code }) {
  const iconConfig = (code) => {
    switch (code) {
      case 1000:
        return sunny;
        break;
      case 1003:
        return partly_cloudy;
        break;
      case 1006:
      case 1009:
        return cloudy;
        break;
      case 1030:
      case 1135:
      case 1147:
        return mist;
        break;
      case 1063:
      case 1150:
      case 1180:
        return patchy_rain;
        break;
      case 1066:
      case 1069:
      case 1210:
      case 1216:
        return patchy_snow;
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
        return thundery_outbreaks;
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
        return light_rain;
        break;
      case 1171:
      case 1195:
      case 1252:
        return heavy_rain;
        break;
      case 1186:
      case 1189:
      case 1240:
        return moderate_rain;
        break;
      case 1192:
      case 1201:
      case 1243:
      case 1246:
      case 1249:
        return heavy_rain_at_times;
        break;
      case 1276:
      case 1279:
      case 1282:
        return rain_thunder;
        break;
      default:
        return <h3>"No preview available"</h3>;
    }
  };
  return (
    <div className="day_icon_div">
      <img className="weather_icon" src={iconConfig(code)} alt="weather icon" />
    </div>
  );
}

export default DayIcon;
