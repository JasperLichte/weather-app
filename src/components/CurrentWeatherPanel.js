import React from 'react';
import LocationHeader from './LocationHeader';
import MainTemperaturePanel from './MainTemperaturePanel';

export default props => {
  const { 
    name: location,
    main: { temp, temp_min: minTemp, temp_max: maxTemp },
    sys: { country },
    requestParams: { units }
  } = props.data;

  return (
    <section
      className="currentWeatherPanel"
    >
      <LocationHeader location={location} country={country} />
      <MainTemperaturePanel temp={temp} minTemp={minTemp} maxTemp={maxTemp} units={units} />
    </section>
  );
};
