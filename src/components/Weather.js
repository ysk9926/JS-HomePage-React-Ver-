import { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import { json } from "react-router-dom";

function Weather() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [icon, setIcon] = useState();
  const [temp, setTemp] = useState();
  const [city, setCity] = useState();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const API_KEY = "ce7068992d56b548802ab995a7a9ab9b";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const getPosition = (position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
    console.log(`lat ${lat}`);
    console.log(`lon ${lon}`);
    count < 7 ? setCount(count + 1) : setLoading(false);
  };

  const getWeather = async () => {
    const json = await (await fetch(url)).json();
    setIcon(`http://openweathermap.org/img/wn/${json.weather[0].icon}.png`);
    setTemp(`${Math.ceil(json.main.temp)}°C`);
    setCity(`${json.name}`);
  };
  useEffect(() => {
    getWeather();
  }, [loading]);

  navigator.geolocation.getCurrentPosition(getPosition);

  return (
    <div className={styles.weather}>
      <ul>
        <li className={styles.weather_li}>
          <span> {temp} </span>
          <img src={icon} />
        </li>
        <li className={styles.weather_li}>
          <span> {city} </span>
        </li>
      </ul>
    </div>
  );
}

export default Weather;
