import React from "react";

export default function WeatherForm() {
  return (
    <div className="weatherForm">
      <form>
        <input type="text" placeholder="Enter your City" className="form-control me-5" />
        <button id="search" type="submit" className="btn btn-primary me-1">
          <i className="fas fa-search"></i>
        </button>
        <button id="location" type="button" className="btn btn-primary me-1">
          <i className="fas fa-location-arrow"></i>
        </button>
        <button id="celsius" type="button" className="btn btn-primary me-1">
          °C
        </button>
        <button id="fahrenheit" type="button" className="btn btn-primary me-1">
          °F
        </button>
      </form>
    </div>
  );
}
