import React, { useState } from "react";

export default function WeatherForm() {
  const [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
    } else {
      alert(`Enter your city`);
    }
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="weatherForm">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter your City" className="form-control me-5" onChange={updateCity} />
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
