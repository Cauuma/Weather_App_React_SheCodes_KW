import React from "react";
import WeatherIcons from "./weatherIcons";

export default function Results(props) {
  function formatDate(date) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let daynumber = date.getDate();
    if (daynumber < 10) {
      daynumber = `0${daynumber}`;
    }
    let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    let hour = date.getHours();
    let minute = date.getMinutes();
    if (minute < 10) {
      minute = `0${minute}`;
    }
    let second = date.getSeconds();
    if (second < 10) {
      second = `0${second}`;
    }
    return `${day} ${daynumber}.${month}.${year} ${hour}:${minute}:${second}`;
  }

  return (
    <div className="result-container">
      <div className="row">
        <div className="col-12 col-md-6 mb-5">
          <ul>
            <h1 id="located-city">{props.weatherData.city}</h1>
            <li id="date">{formatDate(props.weatherData.date)}</li>
            <li id="temperature">{props.weatherData.temperature} °C </li>
            <WeatherIcons code={props.weatherData.icon} />
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
