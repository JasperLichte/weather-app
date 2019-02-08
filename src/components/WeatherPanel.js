import React from 'react';
import WeatherApi from './../Api/WeatherApi';

export default props => {
  const { name: locationName, weather, sys: { country } } = props.data;

  const backgroundImage = WeatherApi.getImageByConditionId(weather[0].id);

  return (
    <main className="weatherPanel" style={{backgroundImage: `url(${backgroundImage})`}}>
      <h2>{locationName}, {country}</h2>
      <h1>{weather[0].description}</h1>
    </main>
  );
};
