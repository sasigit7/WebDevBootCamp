var express = require("express");
var app = express();

app.use(express.static("public")); // To apply styles to all the files in the public folder
app.set("view engine", "ejs"); // This will allow us to remove all ejs extensions in app.js 

app.get("/", function (req, res) {
    res.render("home");
    //res.send("<h1>Welcome to the home page!</h1><h2>Blah Blah!</h2>");
});

app.get("/fallinlovewith/:thing", function (req, res) {
    var thing = req.params.thing;
    // res.send("You fell in love with " + thing);
    res.render("love", {
        thingVar: thing
    });
});

app.get("/posts/", function(req, res) {
    var posts = [
        {title: "post1", author: "sasi"},
        {title: "post2", author: "sassi"},
        {title: "post3", author: "sasssi"},
    ];
    res.render("posts", {posts: posts});
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
    console.log("Now serving your app!!!");
});