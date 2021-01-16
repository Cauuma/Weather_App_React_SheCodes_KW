import React from "react";
import WeatherIcons from "./weatherIcons";

export default function Results() {
  return (
    <div className="result-container">
      <div className="row">
        <div className="col-12 col-md-6 mb-5">
          <ul>
            <h1 id="located-city">Zürich</h1>
            <h2></h2>
            <li id="date">15.01.2021</li>
            <li id="localTime">16:35</li>
            <WeatherIcons code="13n" />
          </ul>
        </div>
        <div className="col-12 col-md-6 mb-5 mt-5 percent-data">
          <ul className="mt-3">
            <li id="feel">Feels like: -2</li>
            <li id="humidity">70</li>
            <li id="windspeed">20</li>
            <li id="clouds">50</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
