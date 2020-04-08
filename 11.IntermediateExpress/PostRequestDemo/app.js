var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");

var friends = ["Shashi", "Jhanc", "Chakki", "Chukki"];

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/friends", function (req, res) {
    // var friends = ["Shashi", "Jhanc", "Chakki", "Chukki"];
    res.render("friends", {
        friends: friends
    });
});

app.post("/addFriend", function (req, res) {
    // console.log(req.body.newFriend);
    var newAmigo = req.body.newFriend;
    friends.push(newAmigo);
    // res.send("You have reached the Post route!!");
    res.redirect("/friends");
});

// Tell express to listen for requests (start server)
// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Now serving your app!");
// });

// If app.listen method is not configuring to a local port, 
// Change it to this and it should solve the browser issue:
// And then access it on 
// localhost:3000 
app.listen(process.env.PORT || 3000, process.env.IP, function () {
    console.log("Now Serving your app!!");
});