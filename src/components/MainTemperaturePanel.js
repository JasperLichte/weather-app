import React from 'react'

export default props => {
  const { temp, minTemp, maxTemp, units } = props;
  const appendTempUnits = appendUnit(units);
  console.log(props);  

  return (
    <div
      className="mainTemperaturePanel"
    >
      <span
        className="averageTemp"
        dangerouslySetInnerHTML={{ __html: appendTempUnits(temp) }}
      >
      </span>
      <span>
        <span dangerouslySetInnerHTML={{ __html: appendTempUnits(minTemp) }}></span>
        &nbsp;-&nbsp;
        <span dangerouslySetInnerHTML={{ __html: appendTempUnits(maxTemp) }}></span>
      </span>
    </div>
  );
}

const appendUnit = units =>
  temp => temp + (units === 'metric' ? '&deg;C' : '');
