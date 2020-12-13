import React, { useState, useEffect } from "react";
import "./App.css";

import apiKeys from "./apiKeys.js";
import axios from "axios";
import { HiOutlineSearch } from "react-icons/hi";
import { MdLocationSearching } from "react-icons/md";

function App() {
  // const [apiAdress, setApiAdress] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({});

  const search = () => {
    axios
      .get(
        `${apiKeys.base}weather?q=${query}&units=metric&appid=${apiKeys.key}`
      )
      .then((response) => {
        setWeather(response.data);
        setQuery("");
        console.log(weather);
      })
      .catch(function (error) {
        console.log(error);
        setWeather("");
        setQuery("");
        setError({ massage: "Not Found", query: query });
      });
  };

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  useEffect(() => {
    search("");
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
            /* onKeyPress={search}*/
          />
          <div className="location__logo">
            <MdLocationSearching />
          </div>
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="current__weather_image">
              <img
                className="main__temp"
                src={`http://openweathermap.org/img/wn/{weather.weather[0].icon}.png`}
              />
            </div>
            <div className="current_temperature">
              <h1>{Math.round(weather.main.temp)}°c</h1>
              <h5>Feels like {Math.round(weather.main.feels_like)}°c</h5>
            </div>
            <div className="date_day_time">
              <h2>01.01.2020</h2>
              <h2>Sunday</h2>
              <h3>time 12:00</h3>
            </div>
            <div className="current_city">
              <span>city img</span>
              <h2>
                {weather.name},{weather.sys.country}
              </h2>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="additional__data__container">
        <h2>additional container</h2>
      </div>
    </div>
  );
}

export default App;
