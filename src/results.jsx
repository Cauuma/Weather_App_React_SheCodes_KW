import React from "react";
import WeatherIcons from "./weatherIcons";

export default function Results() {
  let weatherData = {
    city: "Zurich",
    temperature: "-1",
    date: "16.01.2021",
    time: "14:20",
    humidity: 80,
    wind: 10,
    clouds: 25,
    feels: "-5",
  };

  return (
    <div className="result-container">
      <div className="row">
        <div className="col-12 col-md-6 mb-5">
          <ul>
            <h1 id="located-city">{weatherData.city}</h1>
            <h2></h2>
            <li id="date">
              {weatherData.date} {weatherData.time}
            </li>
            <li id="temperature">{weatherData.temperature} </li>
            <WeatherIcons code="13n" />
          </ul>
        </div>
        <div className="col-12 col-md-6 mb-5 mt-5 percent-data">
          <ul className="mt-3">
            <li id="feel">feels like: {weatherData.feels}°c</li>
            <li id="humidity">humidity: {weatherData.humidity}%</li>
            <li id="windspeed">windspeed: {weatherData.wind}km/h</li>
            <li id="clouds">clouds: {weatherData.clouds}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
