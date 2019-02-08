import React, { useState } from 'react';
import WeatherApi from './Api/WeatherApi';
import WeatherPanel from './components/WeatherPanel';

export default _ => {
  const [weatherData, setWeatherData] = useState(null);

  if (!weatherData) {
    (async _ => {
      const weatherApi = new WeatherApi();
      const position = await getGeoLocation();
      const weatherData = await weatherApi.makeCall(position);
      setWeatherData(weatherData);
    })();
  }  

  return (
    <>
      { weatherData && weatherData.cod === 200 && <WeatherPanel data={weatherData} /> }
    </>
  )
};

const getGeoLocation = _ => {
  return new Promise(resolve => {
    if (!navigator.geolocation) {
      resolve({});
      return;
    }
    navigator.geolocation.getCurrentPosition(pos => {
      resolve({
        lon: pos.coords.longitude,
        lat: pos.coords.latitude,
      });
    });
  });
};
