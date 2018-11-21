const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var address = argv.address;
const BASE_URL = 'http://www.mapquestapi.com/geocoding/v1/address?key=KRWZ4isO4JaY32CSVsEa3rL6oVkrcQah&location=';

// We have to encode the string to remove spaces

request({
    url: BASE_URL + encodeURIComponent(address),
    json: true
}, (error, response, body) => {
    if (error){
        console.log('Unable to connect to API');
    // This errors are created using the response of google maps api
    } else if (body.status === 'ZERO_RESULTS'){
        console.log('Unable to find that location');
    } else {
        console.log(`Address: ${body.results[0].providedLocation.location}`);
        console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
        console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
    }
    
});