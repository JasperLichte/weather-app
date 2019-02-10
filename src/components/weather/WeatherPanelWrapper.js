import React from 'react';
import WeatherApi from '../../Api/WeatherApi';
import CurrentWeatherPanel from './CurrentWeatherPanel';

export default props => {
  const { weather } = props.data;

  console.log(props.data);

  return (
    <main
      className="weatherPanelWrapper"
      style={{backgroundImage: `url(${WeatherApi.getImageByConditionId(weather[0].id)})`}}
    >
      <CurrentWeatherPanel data={props.data} />
    </main>
  );
};
