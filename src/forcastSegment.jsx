import dayjs from "dayjs";
import React from "react";
import WeatherIcons from "./weatherIcons";

export default function ForcastSegment(props) {
  const date = dayjs(props.date).format("dddd");

  const unit = props.units === "imperial" ? "°F" : "°C";

  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-2">
      <p>
        {date}
        <br />
        {Math.round(props.minTemp)}
        {unit} | {Math.round(props.maxTemp)}
        {unit}
      </p>
      <WeatherIcons code={props.icon} />
    </div>
  );
}
