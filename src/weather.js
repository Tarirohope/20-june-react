import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      //response.data.condition.icon_url,
      iconUrl: (
        <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" />
      ),
      description: response.data.condition.description,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className=" container weatherApp">
        <div className="row">
          <div className="col">
            <div className="container mt-2">
              <div className="row">
                <div className="col mb-4">
                  <form>
                    <input
                      className="me-1 p-3"
                      type="search"
                      placeholder="Enter a city.."
                    ></input>
                    <button className="btn btn-primary me-1 p-3">Search</button>
                    <button className="btn btn-success me-1 p-3">
                      Current
                    </button>
                  </form>
                </div>
              </div>
              <div>
                <p>
                  <span className="currentCity"> {weatherData.city} </span>{" "}
                  <br />
                  <span className="date mb=1 ">
                    <FormattedDate date={weatherData.date} />
                    {weatherData.description}
                  </span>
                </p>
                <div className="row mb-3">
                  <div className="col-sm-6 d-flex">
                    <div className="current-icon"> {weatherData.iconUrl} </div>
                    <div className="current-temp">
                      {Math.round(weatherData.temperature)}
                    </div>
                    <div className="current-units">&deg; C</div>
                  </div>
                  <div className="col-sm-6">
                    <ul>
                      <li> Precipitation: 55% </li>
                      <li>Wind: {weatherData.wind}Km/hr</li>
                      <li>Humidity: {weatherData.humidity} </li>
                    </ul>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-2">
                    <div className="day">Thu</div>
                    <div className="day-icon"> &#127780;</div>{" "}
                    <div className="temp">16&deg;C</div>
                  </div>
                  <div className="col-2">
                    <div className="day">Fri</div>
                    <div className="day-icon">&#127780;</div>{" "}
                    <div className="temp">16&deg;C</div>
                  </div>
                  <div className="col-2">
                    <div className="day">Sat</div>
                    <div className="day-icon">&#127780; </div>{" "}
                    <div className="temp">16&deg;C</div>
                  </div>
                  <div className="col-2">
                    <div className="day">Sun</div>
                    <div className="day-icon">&#127780; </div>{" "}
                    <div className="temp">16&deg;C</div>
                  </div>
                  <div className="col-2">
                    <div className="day">Thu</div>
                    <div className="day-icon">&#127780;</div>{" "}
                    <div className="temp">16&deg;C</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "438ef4abe978ad5a029db4f3900o6f4t";
    let city = "Durban";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}
      &key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
export default Weather;
