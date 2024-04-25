/* eslint-disable react/prop-types */
// * Base
import { useState } from 'react';
import axios from 'axios';

// * Styles
import styles from './Weather.module.css';
import Button from '../Button/Button';
import Field from '../Field/Field';

const Weather = () => {

  const [data, setData] = useState({
    celcius: '0',
    cityName: 'city',
    humidity: 0,
    speed: 0,
  });

  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleClick = () => {
    if (name) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=cb0e66767f222cfdf796a366a1f9b959&&units=metric`;
      axios
        .get(apiUrl)
        .then(res => {
          console.log('response: ', res);
          setData({
            ...data,
            celcius: res.data.main.temp,
            cityName: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
          });
          setError('');
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
          setError('Invalid city name')
        });
    }
  };
  
  if (!data) return <p>Loading...</p>;

  return (
    <div className={styles.weather}>
      <div className={styles.block}>
        <Field error={error} onChange={e => setName(e.target.value)} />
        {/* <input type="text" onChange={e => setName(e.target.value)} className={styles.input}/> */}
        <Button text="search" onClick={handleClick}/>
      </div>
      <div className={styles.search}>
        <div>{data.cityName}</div>
        <div>{Math.round(data.celcius)} ℃</div>
      </div>
      <div className={styles.info}>
        <div>Humidity: {data.humidity} %</div>
        <div>Speed: {Math.round(data.speed)} km/h</div>
      </div>
    </div>
)};

export default Weather;
