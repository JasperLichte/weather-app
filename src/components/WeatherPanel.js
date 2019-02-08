import React from 'react';
import WeatherApi from '../Api/WeatherApi';

export default props => {
  const {data: { name: locationName, weather, sys: { country } } } = props;  

  return (
    <main
      className="weatherPanel"
      style={{backgroundImage: `url(${WeatherApi.getImageByConditionId(weather[0].id)})`}}
    >
      <h2>{locationName}, {country}</h2>
      <h1>{weather[0].description}</h1>
    </main>
  );
};
