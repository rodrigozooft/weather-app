const request = require('request');

request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=KRWZ4isO4JaY32CSVsEa3rL6oVkrcQah&location=1301%20lombard%20street%20philadelphia',
    json: true
}, (err, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});