import React from "react";
import WeatherIcons from "./weatherIcons";

export default function Results(props) {
  return (
    <div className="result-container">
      <div className="row">
        <div className="col-12 col-md-6 mb-5">
          <ul>
            <h1 id="located-city">{props.weatherData.city}</h1>
            <h2></h2>
            <li id="date">
              {props.weatherData.date} {props.weatherData.time}
            </li>
            <li id="temperature">{props.weatherData.temperature} </li>
            <WeatherIcons code="13n" />
          </ul>
        </div>
        <div className="col-12 col-md-6 mb-5 mt-5 percent-data">
          <ul className="mt-3">
            <li id="feel">feels like: {props.weatherData.feels}°c</li>
            <li id="humidity">humidity: {props.weatherData.humidity}%</li>
            <li id="windspeed">windspeed: {props.weatherData.wind}km/h</li>
            <li id="clouds">clouds: {props.weatherData.clouds}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
