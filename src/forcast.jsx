import React from "react";
import ForcastSegment from "./forcastSegment";

export default function Forcast() {
  return (
    <div className="forcast-container">
      <div className="row">
        <ForcastSegment />
        <ForcastSegment />
        <ForcastSegment />
        <ForcastSegment />
        <ForcastSegment />
        <ForcastSegment />
      </div>
    </div>
  );
}
