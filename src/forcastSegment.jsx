import dayjs from "dayjs";
import React from "react";
import WeatherIcons from "./weatherIcons";

export default function ForcastSegment(props) {
  const date = dayjs(props.date).format("dddd");

  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-2">
      <p>
        {date}
        <br />
        {props.minTemp} | {props.maxTemp}
      </p>
      <WeatherIcons code={props.icon} />
    </div>
  );
}
