import React, { useState, useEffect } from "react";
import "./App.css";

// import useLocation from "./currentLocation";
import apiKeys from "./apiKeys.js";
import axios from "axios";
import Clock from "react-live-clock";

import { HiOutlineSearch } from "react-icons/hi";
import { MdLocationSearching } from "react-icons/md";
import dateBuilder from "./dateBuilder";
import DayIcon from "./icon _component/day_icon";
import NightIcon from "./icon _component/night_icon";
import humidity from "./assets/humidity.png";
import presure from "./assets/presure.png";
import uv_index from "./assets/uv_index.png";
import sunset from "./assets/sunset.png";
import sunrise from "./assets/sunrise.png";
import wind from "./assets/wind.png";
import wind_direction from "./assets/wind_direction.png";
import visibility from "./assets/visibility.png";

function App() {
  const [query, setQuery] = useState("lisboa");
  const [weather, setWeather] = useState(""); //or useState({})

  //http://api.weatherapi.com/v1/forecast.json?key=ce4f2077be34443fba3221205201612&q=lisbon&days3
  const search = () => {
    axios
      .get(`${apiKeys.base}/forecast.json?key=${apiKeys.key}&q=${query}&days3`)
      .then((response) => {
        setWeather(response.data);
        setQuery("");
        console.log(weather);
      })
      .catch(function (error) {
        console.log(error);
        alert("Wrong city name.Try again.");
        setWeather("");
        setQuery("");
      });
  };

  const keyEnter = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="app__main_container">
      <div className="current__data_container">
        <div className="search__box">
          <div className="search__logo">
            <HiOutlineSearch onClick={search} />
          </div>
          <input
            type="text"
            className="search__bar"
            placeholder="Search any city"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={keyEnter}
          />
          <div className="location__logo">
            <MdLocationSearching />
          </div>
        </div>
        {typeof weather.current != "undefined" ? (
          <div>
            <div className="current_city">
              <h2 className="data_text">{weather.location.name},</h2>
              <h3 className="data_text">{weather.location.country} </h3>
            </div>
            <div className="current__weather_image">
              {weather.current.is_day === 1 ? (
                <DayIcon code={weather.current.condition.code} />
              ) : (
                <NightIcon code={weather.current.condition.code} />
              )}
            </div>
            <div className="current_temperature">
              <h1 className="curr_temp_deg">
                {Math.round(weather.current.temp_c)}°c
              </h1>
              <h4>
                min {Math.round(weather.forecast.forecastday[0].day.mintemp_c)}{" "}
                / max{" "}
                {Math.round(weather.forecast.forecastday[0].day.maxtemp_c)}
              </h4>
              <h4 className="data__text">{weather.current.condition.text}</h4>
              <h4 className="data__text">
                Feels like {Math.round(weather.current.feelslike_c)}°c
              </h4>
            </div>
            <div className="date_day_time">
              <h4 className="data__text">
                {dateBuilder(new Date(weather.location.localtime))}
              </h4>
              <h3>
                <Clock
                  format={"HH:mm"}
                  ticking={true}
                  timezone={weather.location.tz_id}
                />
              </h3>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {typeof weather.current !== "undefined" ? (
        <div className="additional__data__container">
          <div className="forecast__hours-days">
            <div className="switch__box">
              <span>day</span>
              <span>week</span>
            </div>
            <div className="forecast__container">
              <div className="forecast__box">
                <h2>day</h2>
              </div>
              <div className="forecast__box">
                <h2>day</h2>
              </div>
              <div className="forecast__box">
                <h2>day</h2>
              </div>
              <div className="forecast__box">
                <h2>day</h2>
              </div>
              <div className="forecast__box">
                <h2>day</h2>
              </div>
            </div>
          </div>
          <div className="today__highlights">
            <div className="today__box">
              <h4 className="today__box__title">Humidity</h4>
              <div className="today__box__info">
                <img className="today__box-img" src={humidity} alt="hum_img" />
                <h3>{weather.current.humidity} %</h3>
              </div>
            </div>
            <div className="today__box">
              <h4 className="today__box__title">Pressure</h4>
              <div className="today__box__info">
                <img
                  className="today__box-img"
                  src={presure}
                  alt="presure_img"
                />
                <h3>{weather.current.pressure_mb} mb</h3>
              </div>
            </div>
            <div className="today__box">
              <h4 className="today__box__title">wind</h4>
              <div className="double__info__box">
                <div className="today__box__info">
                  <img
                    className="today__box-img"
                    src={wind_direction}
                    alt="wind_spid_img"
                  />
                  <h4> {weather.current.wind_kph.toFixed(1)} km/h</h4>
                </div>
                <div className="today__box__info">
                  <img className="today__box-img" src={wind} alt="wind_img" />
                  <h4>{weather.current.wind_dir}</h4>
                </div>
              </div>
            </div>
            <div className="today__box">
              <h4 className="today__box__title">sunrise / sunset</h4>
              <div className="double__info__box">
                <div className="today__box__info">
                  <img
                    className="today__box-img"
                    src={sunrise}
                    alt="sunrise_img"
                  />
                  <h4>{weather.forecast.forecastday[0].astro.sunrise}</h4>
                </div>
                <div className="today__box__info">
                  <img
                    className="today__box-img"
                    src={sunset}
                    alt="sunset_img"
                  />
                  <h4>{weather.forecast.forecastday[0].astro.sunset}</h4>
                </div>
              </div>
            </div>
            <div className="today__box">
              <h4 className="today__box__title">UV Index</h4>
              <div className="today__box__info">
                <img className="today__box-img" src={uv_index} alt="uv_img" />
                <h3>{weather.current.uv}</h3>
              </div>
            </div>

            <div className="today__box">
              <h4 className="today__box__title">visibility</h4>
              <div className="today__box__info">
                <img
                  className="today__box-img"
                  src={visibility}
                  alt="visibility_img"
                />
                <h3>{weather.current.vis_km.toFixed(1)} km</h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* <div>
          {location.loaded
            ? JSON.stringify(location.coordinates.lat)
            : "Location data not availibale yet"}
        </div> */}
    </div>
  );
}

export default App;
