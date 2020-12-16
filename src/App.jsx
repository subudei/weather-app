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
  const [weather, setWeather] = useState({});
  const location = useLocation();

  const search = () => {
    axios
      .get(`${apiKeys.base}/current.json?key=${apiKeys.key}&q=${query}`)
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
        {typeof weather.current != "undefined" ? (
          <div>
            <div className="current__weather_image">
              <img
                className="main__temp"
                alt="weather"
                src={weather.current.condition.icon}
              />
              {/* <img
                src={`a${weather.weather[0].icon}`}
                className="main__temp"
                alt="weather"
              /> */}
              {/* {`${weather.weather[0].icon}` === "04n" ? (
                <img
                  className="main__temp"
                  src={logo}
                  // src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                  alt="weather"
                />
              ) : null} */}
            </div>
            <div className="current_temperature">
              <h1>{Math.round(weather.current.temp_c)}°c</h1>
              <h4 className="data__text">{weather.current.condition.text}</h4>
              <h4>Feels like {Math.round(weather.current.feelslike_c)}°c</h4>
            </div>
            <div className="date_day_time">
              <h2>{dateBuilder(new Date())}</h2>
              <h3>
                <Clock
                  format={"HH:mm"}
                  ticking={true}
                  timezone={weather.location.tz_id}
                />
              </h3>
              <h3> </h3>
            </div>
            <div className="current_city">
              <span>city img</span>
              <h2>
                {weather.location.name},{weather.location.country}
              </h2>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="additional__data__container">
        {typeof weather.main != "undefined" ? (
          <div className="today__highlights">
            <div className="today__box">
              <h5>Humidity</h5>
              {weather.main.humidity}
            </div>
            <div className="today__box">
              <h5>Pressure</h5>
              {weather.main.pressure}
            </div>
            <div className="today__box">
              <h5>Wind</h5>
              <p>speed{weather.wind.speed}</p>
              <p>degree{weather.wind.deg}</p>
            </div>
            <div className="today__box">
              <h5>UV index</h5>
            </div>
            <div className="today__box"></div>
            <div className="today__box">{`a${weather.weather[0].icon}`}</div>
          </div>
        ) : (
          ""
        )}

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
