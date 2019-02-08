import weatherConditionGroups from './weatherConditionGroups';

export default class WeatherApi {

  constructor() {
    this.endpoint = 'https://api.lichte.info/weather/?';
    this.data = {};
  }

  makeCall = async params => {
    const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    const data = await fetch(this.endpoint + queryString);
    this.data = await data.json();
    return this.data;
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
