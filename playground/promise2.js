const request = require('request');
const BASE_URL = 'http://www.mapquestapi.com/geocoding/v1/address?key=KRWZ4isO4JaY32CSVsEa3rL6oVkrcQah&location=';

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    request({
      url: BASE_URL + encodeURIComponent(address),
      json: true
    }, (error, response, body) => {
      if (error){
        reject(error);
      } else {
        resolve({
          address: body.results[0].providedLocation.location,
          latitude: body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng
        });
      }
    });
  });
}

geocodeAddress('1301 Lombard Street Philadelphia').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (erroMessage) => {
  console.log(erroMessage);
});