import React, { useState } from 'react';
import WeatherApi from './Api/WeatherApi';
import WeatherPanel from './components/WeatherPanel';

export default _ => {
  const [weatherData, setWeatherData] = useState(null);

  if (!weatherData) {
    (async _ => {
      const weatherApi = new WeatherApi();
      const position = await getGeoLocation();      
      const weatherData = await weatherApi.makeCall({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
      });
      setWeatherData(weatherData)

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
    navigator.geolocation.getCurrentPosition(resolve);
  });
};
