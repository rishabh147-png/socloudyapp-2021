import React, { useState } from "react";
import "./App.css";

const api = {
  key: "506aef135f70cb4cbb3034d56067662d",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  
  

  

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <main>
      <header id="header" className="fixed-top  ">
        <div className="container d-flex align-items-center justify-content-lg-between">
          <h1 className="logo me-auto me-lg-0 " style={{ color: "black" }}>
            <a href="/">
              so<span>cloudy</span>
            </a>
          </h1>
          <a href="index.html" className="logo me-auto me-lg-0">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a>

          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              style={{
                height: "40px",
                width: "170px",
                borderRadius: "3px",
                border: "3px solid black",
              }}
              placeholder="Enter city name"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
        </div>
      </header>
      {typeof weather.main != "undefined" ? (
        <div>
          <section
            id="hero"
            className="d-flex align-items-center justify-content-center"
          >
            <div className="container" data-aos="fade-up">
              <div
                className="row justify-content-center"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="col-xl-6 col-lg-8">
                  <h1>
                    {weather.name},
                    <span className="mx-2">{weather.sys.country}</span>
                  </h1>
                  <h5>{dateBuilder(new Date())}</h5>
                </div>
              </div>

              <div className="container px-4 py-5" id="icon-grid">
                <h2>
                  {Math.round(weather.main.temp)}°c
                  <span>,{weather.weather[0].main}</span>
                </h2>

                <div
                  className="weather-info d-flex flex-wrap "
                  style={{ marginTop: "55px" }}
                >
                  <div className="col d-flex align-items-start">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/76/76660.png"
                      alt=""
                      style={{ height: "65px", width: "60px" }}
                    />
                    <div>
                      <h4 className="fw-bold mb-0 mx-1 my-2">
                        {weather.main.temp_max}°c
                      </h4>
                      <p>Max:Temp</p>
                    </div>
                  </div>
                  <div className=" wind-humidity col d-flex align-items-start    ">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/63/63581.png"
                      alt=""
                      style={{ height: "60px", width: "60px" }}
                    />
                    <div>
                      <h4 className="fw-bold mb-0 my-2 ">
                        {weather.main.temp_min}°c
                      </h4>
                      <p className="mx-1">Min:Temp</p>
                    </div>
                  </div>

                  <div className=" windx col d-flex align-items-start ">
                    <img
                      src="https://www.pngall.com/wp-content/uploads/5/Wind-PNG.png"
                      alt=""
                      style={{ height: "65px", width: "65px" }}
                    />
                    <div>
                      <h4 className="fw-bold mb-0 my-2 ">
                        {weather.wind.speed}
                        <span style={{ fontSize: "15px" }}> k/hr</span>
                      </h4>
                      <p>Wind</p>
                    </div>
                  </div>
                  <div className="col d-flex align-items-start ">
                    <img
                      src="http://cdn.onlinewebfonts.com/svg/img_262976.png"
                      alt=""
                      style={{ height: "60px", width: "55px" }}
                    />
                    <div>
                      <h4 className="fw-bold mb-0  my-2">
                        {weather.main.pressure}
                      </h4>
                      <p className="mx-2">Pressure</p>
                    </div>
                  </div>
                  <div className=" wind-humidity col d-flex align-items-start    ">
                    <img
                      src="https://icon-library.com/images/img_116176.png"
                      alt=""
                      style={{ height: "60px", width: "50px" }}
                    />
                    <div>
                      <h4 className="fw-bold mb-0 my-1  ">
                        {weather.main.humidity} %
                      </h4>
                      <p className="mx-2">Humidity</p>
                    </div>
                  </div>
                  <div className=" wind-humidity col d-flex align-items-start     ">
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_visibility_48px-512.png"
                      alt=""
                      style={{ height: "60px", width: "50px" }}
                    />
                    <div>
                      <h4 className="fw-bold mb-0 my-2 ">
                        {weather.visibility} m
                      </h4>
                      <p className="mx-1">Visibility</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div>
          <div className=" bg-dark text-white" style={{ marginTop: "" }}>
            <img
              style={{ height: "850px" }}
              src="https://images.unsplash.com/photo-1543613949-95cd1b38a10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              className="card-img"
              alt="..."
            />
            <div
              className="card-img-overlay text-center"
              style={{ marginTop: "200px" }}
            >
              <img
                style={{ height: "120px", width: "120px" }}
                src="https://cdn-icons-png.flaticon.com/512/0/74.png"
                className="card-img"
                alt="..."
              />
              <h4
                className="card-text "
                style={{
                  marginTop: "49px",
                  color: "black",
                  fontSize: "26px",
                  fontFamily: "fantasy",
                }}
              >
                Weather is the state of the atmosphere, describing for example
                the degree to which it is hot or cold, wet or dry, calm or
                stormy, clear or cloudy.!!
              </h4>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
