var request = require("request");
// Free Sunset and sunrise times API @ https://sunrise-sunset.org/api
request("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400", function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var parsedData = JSON.parse(body);
        console.log(parsedData);
    }
});