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
      </div>
      <div className="additional__data__container">
        <h2>additional container</h2>
      </div>
    </div>
  );
}

export default App;
