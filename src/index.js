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
    console.log(this);

    this.setState({
      city: newCity,
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
