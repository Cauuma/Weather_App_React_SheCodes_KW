import React from "react";
import ForcastSegment from "./forcastSegment";

export default function Forcast(props) {
  const segments = props.forecast.map((forecast) => {
    return (
      <ForcastSegment
        key={forecast.date}
        date={forecast.date}
        minTemp={forecast.minTemp}
        maxTemp={forecast.maxTemp}
        icon={forecast.icon}
        units={props.units}
      />
    );
  });

  return (
    <div className="forcast-container">
      <div className="row">{segments}</div>
    </div>
  );
}
