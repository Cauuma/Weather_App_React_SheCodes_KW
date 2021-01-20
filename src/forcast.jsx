import React from "react";
import ForcastSegment from "./forcastSegment";

export default function Forcast() {
  return (
    <div className="forcast-container">
      <div className="row">
        <ForcastSegment day="Sunday" minTemp="-3" maxTemp="-1" />
        <ForcastSegment day="Monday" minTemp="-3" maxTemp="-1" />
        <ForcastSegment day="Tuesday" minTemp="-3" maxTemp="-1" />
        <ForcastSegment day="Wednesday" minTemp="-3" maxTemp="-1" />
        <ForcastSegment day="Thursday" minTemp="-3" maxTemp="-1" />
        <ForcastSegment day="Friday" minTemp="-3" maxTemp="-1" />
      </div>
    </div>
  );
}
