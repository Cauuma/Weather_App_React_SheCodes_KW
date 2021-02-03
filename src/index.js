import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import bootstrap from "bootstrap";
import WeatherForm from "./weatherForm";
import Results from "./results";
import Forcast from "./forcast";
import Footer from "./footer";

import "./custom.scss";
import "./index.scss";
import "./weatherForm.scss";
import "./results.scss";
import "./forcast.scss";
import "./weatherIcons.scss";
import "./footer.scss";

//Forcast mit Tag
//Forcast Icons
class WeatherApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "Zurich",
      temperature: "-1",
      humidity: 80,
      wind: 10,
      clouds: 25,
      feels: "-5",
      icon: "01d",
    };
  }

  cityChanged(newCity) {
    this.loadWeatherData(newCity);
  }

  loadWeatherData(newCity) {
    let apiKey = "4eb15a8e1b28fb350a8b50ccc073b27a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then((response) => this.updateWeatherData(response));
  }

  updateWeatherData(response) {
    this.setState({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      clouds: response.data.clouds.all,
      feels: Math.round(response.data.main.feels_like),
      icon: response.data.weather[0].icon,
    });
  }

  render() {
    return (
      <div>
        <div className="weatherContainer">
          <WeatherForm onCityChanged={(newCity) => this.cityChanged(newCity)} />
          <Results weatherData={this.state} />
          <Forcast />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherApp />, rootElement);
