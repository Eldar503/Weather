import React from "react";

const Weather = ({
  country,
  city,
  temperature,
  humidity,
  description,
  error,
  addCart,
}) => (
  <div className="weather__info">
    {error === "" ? (
      <div>
        <p className="weather__key">
          {" "}
          Локация:
          <span className="value">
            {" "}
            {city}, {country}
          </span>
        </p>
        <p className="weather__key">
          {" "}
          Температура:
          <span className="value"> {temperature}</span>
        </p>
        <p className="weather__key">
          {" "}
          Влажность:
          <span className="value"> {humidity}</span>
        </p>
        <p className="weather__key">
          {" "}
          Небо:
          <span className="value"> {description}</span>
        </p>
        <button className="add" onClick={addCart}>
          Добавить
        </button>
      </div>
    ) : (
      <span className="weather__error">
        {error && <p className="weather__key">{error}</p>}
      </span>
    )}
  </div>
);
export default Weather;
