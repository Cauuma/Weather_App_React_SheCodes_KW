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
//Results Update Time
class WeatherApp extends React.Component {
  apiKey = "4eb15a8e1b28fb350a8b50ccc073b27a";

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      isLoading: true,
      units: "metric",
    };
  }

  componentDidMount() {
    this.loadWeatherDataByCity("Zurich");
  }

  cityChanged(newCity) {
    this.loadWeatherDataByCity(newCity);
  }

  loadWeatherDataByCity(newCity) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${this.apiKey}&units=${this.state.units}`;
    this.loadWeatherDataByUrl(apiUrl);
  }

  loadWeatherDataByCoords(lat, lon) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=${this.state.units}`;
    this.loadWeatherDataByUrl(apiUrl);
  }

  loadWeatherDataByUrl(url) {
    this.setState({ isLoading: true });
    axios.get(url).then(
      (response) => this.updateWeatherData(response),
      (error) => {
        this.setState({ isLoading: false });
        alert("An error occurred or city not found!");
      }
    );
  }

  updateWeatherData(response) {
    this.setState(
      {
        city: response.data.name,
        temperature: Math.round(response.data.main.temp),
        date: new Date((response.data.dt + response.data.timezone) * 1000),
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        clouds: response.data.clouds.all,
        feels: Math.round(response.data.main.feels_like),
        icon: response.data.weather[0].icon,
        lat: response.data.coord.lat,
        lon: response.data.coord.lon,
      },
      () => this.loadForecast(this.state.lat, this.state.lon)
    );
  }

  loadForecast(lat, lon) {
    let apiKey = "4eb15a8e1b28fb350a8b50ccc073b27a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lon=${lon}&lat=${lat}&appid=${apiKey}&units=${this.state.units}&exclude=current,minutely,hourly,alerts`;
    axios.get(apiUrl).then((response) => this.updateForecast(response));
  }

  updateForecast(response) {
    let newForecast = response.data.daily.map((day) => {
      return {
        date: new Date(day.dt * 1000),
        minTemp: day.temp.min,
        maxTemp: day.temp.max,
        icon: day.weather[0].icon,
      };
    });

    this.setState({
      forecast: newForecast.slice(1, 7),
      isLoaded: true,
      isLoading: false,
    });
  }

  switchToCelsius() {
    this.setState({ units: "metric" }, () => {
      this.loadWeatherDataByCity(this.state.city);
    });
  }

  switchToFahrenheit() {
    this.setState({ units: "imperial" }, () => {
      this.loadWeatherDataByCity(this.state.city);
    });
  }

  locationByCoords(lat, lon) {
    this.loadWeatherDataByCoords(lat, lon);
  }

  render() {
    let loadingIndicator = null;
    if (this.state.isLoading) {
      loadingIndicator = (
        <div id="loading-indicator">
          <div id="floatingCirclesG">
            <div className="f_circleG" id="frotateG_01"></div>
            <div className="f_circleG" id="frotateG_02"></div>
            <div className="f_circleG" id="frotateG_03"></div>
            <div className="f_circleG" id="frotateG_04"></div>
            <div className="f_circleG" id="frotateG_05"></div>
            <div className="f_circleG" id="frotateG_06"></div>
            <div className="f_circleG" id="frotateG_07"></div>
            <div className="f_circleG" id="frotateG_08"></div>
          </div>
        </div>
      );
    }

    var container = null;
    if (this.state.isLoaded) {
      container = (
        <div className="weatherContainer">
          <WeatherForm
            onCityChanged={(newCity) => this.cityChanged(newCity)}
            switchToCelsius={this.switchToCelsius.bind(this)}
            switchToFahrenheit={this.switchToFahrenheit.bind(this)}
            locationByCoords={this.locationByCoords.bind(this)}
          />
          <Results weatherData={this.state} />
          <Forcast forecast={this.state.forecast} units={this.state.units} />
        </div>
      );
    }

    return (
      <div>
        {container}
        <div>
          <Footer />
        </div>

        {loadingIndicator}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherApp />, rootElement);
