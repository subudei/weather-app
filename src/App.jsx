import React, { useState, useEffect } from "react";
import "./App.css";

import useLocation from "./currentLocation";
import apiKeys from "./apiKeys.js";
import axios from "axios";
import Clock from "react-live-clock";

import { HiOutlineSearch } from "react-icons/hi";
import { MdLocationSearching } from "react-icons/md";
import dateBuilder from "./dateBuilder";

function App() {
  const [query, setQuery] = useState("london");
  // const [error, setError] = useState("");
  const [weather, setWeather] = useState({});
  const location = useLocation();

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
        alert("Wrong city name.Try again.");
        setWeather("");
        setQuery("");
        // setError({ massage: "Not Found", query: query });
      });
  };

  const keyEnter = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  // function checkTime(i) {
  //   if (i < 10) {
  //     i = "0" + i;
  //   }
  //   return i;
  // }

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
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="current__weather_image">
              <img
                className="main__temp"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="weather"
              />
            </div>
            <div className="current_temperature">
              <h1>{Math.round(weather.main.temp)}°c</h1>
              <h4 className="data__text">{weather.weather[0].description}</h4>
              <h4>Feels like {Math.round(weather.main.feels_like)}°c</h4>
            </div>
            <div className="date_day_time">
              <h2>{dateBuilder(new Date())}</h2>
              <h3>
                <Clock
                  format={"HH:mm:ss"}
                  ticking={true}
                  timezone={weather.timezone}
                />
              </h3>
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
        <div>
          {location.loaded
            ? JSON.stringify(location.coordinates.lat)
            : "Location data not availibale yet"}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
