// Initialize express package 
var express = require("express");
var app = express();

// Initialize ejs package
app.set("view engine", "ejs");

// Landing page route:
app.get("/", function (req, res) {
    // res.send("This will be the landing page soon!");

    // Render landing template 
    res.render("landing"); // no ejs extension needed
});

// Campground route: 
app.get("/campgrounds", function (req, res) {
    // Images Source: https://www.photosforclass.com/search?text=camping 
    var campgrounds = [{
            name: "Nature Camp",
            image: "https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf85254794f732a72d49748_340.jpg"
        },
        {
            name: "Friends Camp",
            image: "https://pixabay.com/get/52e8d4444255ae14f1dc84609620367d1c3ed9e04e50744173297edd974dc0_340.jpg"
        },
        {
            name: "Sunrise Camp",
            image: "https://pixabay.com/get/52e5d7414355ac14f1dc84609620367d1c3ed9e04e50744173297edd974dc0_340.jpg"
        }
    ];
    // Render the campground template and pass the data through an object
    res.render("campgrounds", {
        campgrounds: campgrounds
    });

});

// Tell express to listen for requests (start server)
app.listen(process.env.PORT || 3000, process.env.IP, function () {
    console.log("The YelpCamp Server Has Started!!!");
});