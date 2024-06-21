import React from "react";
import "./Weather.css";

function Weather() {
  return (
    <div className=" container weatherApp">
      <div className="row">
        <div className="col-sm-9">
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
                  <button className="btn btn-success me-1 p-3">Current</button>
                </form>
              </div>
            </div>
            <div>
              <p>
                <span className="currentCity">Lisbon </span> <br />
                <span className="date">
                  Wednesday 15:36
                  <br />
                  Clouds
                </span>
              </p>
              <div className="row mb-3">
                <div className="col-sm-6 d-flex">
                  <div className="current-icon"> &#127780; </div>
                  <div className="current-temp">20</div>
                  <div className="current-units">&deg; C</div>
                </div>
                <div className="col-sm-6">
                  <p>
                    Precipitation: 55% <br />
                    Wind: 3km/h
                  </p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-2">
                  <div className="day">Thu</div>
                  <div className="day-icon"> &#127780;</div>{" "}
                  <div className="temp">16&deg;C</div>
                </div>
                <div className="col-sm-2">
                  <div className="day">Fri</div>
                  <div className="day-icon">&#127780;</div>{" "}
                  <div className="temp">16&deg;C</div>
                </div>
                <div className="col-sm-2">
                  <div className="day">Sat</div>
                  <div className="day-icon">&#127780; </div>{" "}
                  <div className="temp">16&deg;C</div>
                </div>
                <div className="col-sm-2">
                  <div className="day">Sun</div>
                  <div className="day-icon">&#127780; </div>{" "}
                  <div className="temp">16&deg;C</div>
                </div>
                <div className="col-sm-2">
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
}

export default Weather;
