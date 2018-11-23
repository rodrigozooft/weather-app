const request = require('request');

var getWeather = (latitude, longitude, callback) => {
  request({
    url: "https://api.darksky.net/forecast/d921247c4819bf682c80f1e191e9e12e/" + latitude + "," + longitude,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200){
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
    } else {
        callback('Unable to fetch the weather');
    }
  });
};

module.exports = {
  getWeather
}