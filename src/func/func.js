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

export {
  getGeoLocation,
};
