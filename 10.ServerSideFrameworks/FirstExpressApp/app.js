// console.log("Our Express App will go here!");

var express = require("express");
var app = express();

// '/' => "Hello Express!"
app.get("/", function (req, res) {
  res.send("Hello Express!");
});

// '/bye' => "Goodbye Express!"
app.get("/bye", function (req, res) {
  res.send("Goodbye Express!");
});

// '*' => type anything
app.get("*", function (req, res) {
  res.send("You are a star!");
});

app.get("/r/:subredditName", function (req, res) {
  //console.log(req.params);
  var subreddit = req.params.subredditName;
  res.send("WELCOME TO THE " + subreddit.toUpperCase() + "SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function (req, res) {
  console.log(req.params);
  res.send("Welcome to the comments page!");
});

// Tell express to listen for requests (start server)
// app.listen(process.env.PORT, process.env.IP, function() {
//     console.log("Server has started!!!!");
// });

// If app.listen method is not configuring to a local port, 
// Change it to this and it should solve the browser issue:
// And then access it on 
// localhost:3000 => Hello Express!
// localhost:3000/bye => Goodbye Express!
// localhost:3000/hkahkskja => Displays whatever we type 
app.listen(process.env.PORT || 3000, process.env.IP, function () {
  console.log("Server has started!!!!");
});