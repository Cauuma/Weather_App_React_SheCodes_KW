import React from "react";
import ReactDOM from "react-dom";
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

function WeatherApp() {
  return (
    <div>
      <div className="weatherContainer">
        <WeatherForm />
        <Results />
        <Forcast />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherApp />, rootElement);
