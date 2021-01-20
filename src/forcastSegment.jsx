import React from "react";
import WeatherIcons from "./weatherIcons";

export default function ForcastSegment(props) {
  let forcastData = {
    day: props.day,
    minTemp: props.minTemp,
    maxTemp: props.maxTemp,
  };
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-2">
      <p>
        {forcastData.day}
        <br />
        {forcastData.minTemp} | {forcastData.maxTemp}
      </p>
      <WeatherIcons code="13n" />
    </div>
  );
}
