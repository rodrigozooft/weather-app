const request = require('request');

const BASE_URL = 'http://www.mapquestapi.com/geocoding/v1/address?key=KRWZ4isO4JaY32CSVsEa3rL6oVkrcQah&location=';

// We have to encode the string to remove spaces

var getLocation = (address, callback) => {

    request({
        url: BASE_URL + encodeURIComponent(address),
        json: true
    }, (error, response, body) => {
        if (error){
            callback('Unable to connect to API');
        // This errors are created using the response of google maps api
        } else if (body.status === 'ZERO_RESULTS'){
            callback('Unable to find that location')
        } else {
            callback(undefined, {
                address: body.results[0].providedLocation.location,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
        }
    });
}

module.exports = {
    getLocation
}

// https://api.darksky.net/forecast/d921247c4819bf682c80f1e191e9e12e/34.196973,-90.605302