var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("search");
});

app.get("/results", function (req, res) {
    // res.send("Hello, it works!!");
    // console.log(req.query.search);
    var query = req.query.search;
    // request("http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb", function (error, response, body) {
    var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + query;
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // res.send(body);
            // var results = JSON.parse(body);
            var data = JSON.parse(body);
            // res.send(results["Search"][0]["Title"]); // Guardians of the Galaxy
            res.render("results", {
                data: data
            });
        }
    });
});

app.listen(process.env.PORT || 3000, process.env.IP, function () {
    console.log("Movie App has Started!!");
});