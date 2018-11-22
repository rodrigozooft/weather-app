const yargs = require('yargs');
const request = require('request');

const geocode = require('./geocode/geocode');

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
result = geocode.getLocation(address, (errorMessage, results) => {
    if (errorMessage){
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2))
        return JSON.stringify(results, undefined, 2);
    }
});

request({
    url: "https://api.darksky.net/forecast/d921247c4819bf682c80f1e191e9e12e/34.196973,-90.605302",
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200){
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch the weather');
    }
});