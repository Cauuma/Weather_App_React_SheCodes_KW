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

class WeatherApp extends React.Component {
  static apiKey = "ca867a1ff9a2ba4fcae7d290754eb99e";

  constructor(props) {
    super(props);

    this.state = {
      city: "Zurich",
      temperature: "-1",
      date: "16.01.2021",
      time: "14:20",
      humidity: 80,
      wind: 10,
      clouds: 25,
      feels: "-5",
    };
  }

  cityChanged(newCity) {
    this.loadWeatherData();
  }

  loadWeatherData(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(updateWeatherData);
  }

  updateWeatherData(response) {
    this.setState({
      city: response.data.name,
      temperature: response.data.main.temp,
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
