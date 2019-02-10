import React, { useState } from 'react';
import { getGeoLocation } from './func/func';
import WeatherApi from './Api/WeatherApi';

import LoadingScreen from './components/common/LoadingScreen';
import WeatherPanelWrapper from './components/weather/WeatherPanelWrapper';

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
      { (weatherData && weatherData.cod === 200)
        ? <WeatherPanelWrapper data={weatherData} /> 
        : <LoadingScreen /> }
    </>
  )
};
