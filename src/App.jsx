import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="app__main_container">
      <div className="current__data_container">
        <div className="search__box">
          <div className="search__logo">Q</div>
          <input
            type="text"
            className="search__bar"
            placeholder="Search any city"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </div>
        <div className="current__weather_image">
          <p>svg wather</p>
        </div>
        <div className="current_temperature">
          <h1>21 C</h1>
          <h5>feels like 20 C</h5>
        </div>
        <div className="date_day_time">
          <h2>01.01.2020</h2>
          <h2>Sunday</h2>
          <h3>time 12:00</h3>
        </div>
        <div className="current_city">
          <span>city img</span>
          <h2>NEW YORK, USA</h2>
        </div>
      </div>
      <div className="additional__data__container">
        <h2>additional container</h2>
      </div>
    </div>
  );
}

export default App;
