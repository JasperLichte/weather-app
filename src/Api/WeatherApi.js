import weatherConditionGroups from './weatherConditionGroups';

export default class WeatherApi {

  constructor() {
    this.endpoint = 'https://api.lichte.info/weather/?';
  }

  makeCall = async params => {
    params.units = 'metric';
    const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    let data = await fetch(this.endpoint + queryString);
    data = await data.json();
    data.requestParams = params;
    return data;
  }

  getData = _ => this.data;

  static getImageByConditionId = id => {
    id = parseInt(id);
    for (const key in weatherConditionGroups) {
      const group = weatherConditionGroups[key];
      if (id >= group.minID && id <= group.maxID) {
        return group.img;
      }
    }
  }

}
