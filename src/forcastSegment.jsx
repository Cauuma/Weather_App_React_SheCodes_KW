import React from "react";
import WeatherIcons from "./weatherIcons";

export default function ForcastSegment() {
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-2">
      <p>
        Saturday <br />
        3°c | 5°c
      </p>
      <WeatherIcons code="13n" />
    </div>
  );
}
