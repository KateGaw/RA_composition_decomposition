import React from "react";

// Блок "Погода", отображает показания о погоде

const Weather = (props) => {
  return (
    <div className="weather">
      <h3>{props.title}</h3>
      <div className="weather_block">
        <img src={props.icon} alt="weather" className="weather_img" />
        <h2 className="main_weather">{props.weather.main}</h2>
        <div className="weather_values">
          <p className="weather_vars">Утром {props.weather.morning},</p>
          <p className="weather_vars">Днем {props.weather.day}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
