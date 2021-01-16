import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcons(props) {
  const codeMapping = {
    "01d": { description: "CLEAR_DAY", color: "#000" },
    "01n": { description: "CLEAR_NIGHT", color: "#000" },
    "02d": { description: "PARTLY_CLOUDY_DAY", color: "#000" },
    "02n": { description: "PARTLY_CLOUDY_NIGHT", color: "#000" },
    "03d": { description: "PARTLY_CLOUDY_DAY", color: "#000" },
    "03n": { description: "PARTLY_CLOUDY_NIGHT", color: "#000" },
    "04d": { description: "CLOUDY", color: "#000" },
    "04n": { description: "CLOUDY", color: "#000" },
    "09d": { description: "RAIN", color: "#000" },
    "09n": { description: "RAIN", color: "#000" },
    "10d": { description: "SLEET", color: "#000" },
    "10n": { description: "SLEET", color: "#000" },
    "11d": { description: "SLEET", color: "#000" },
    "11n": { description: "SLEET", color: "#000" },
    "13d": { description: "SNOW", color: "#000" },
    "13n": { description: "SNOW", color: "#000" },
    "50d": { description: "FOG", color: "#000" },
    "50n": { description: "FOG", color: "#000" },
  };

  return (
    <div className="WeatherIcons">
      <ReactAnimatedWeather
        icon={codeMapping[props.code].description}
        color={codeMapping[props.code].color}
        size={80}
        animate={true}
      />
    </div>
  );
}
