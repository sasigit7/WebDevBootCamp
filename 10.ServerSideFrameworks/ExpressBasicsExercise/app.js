var express = require("express");
var app = express();

// Task 1:
app.get("/", function (req, res) {
    res.send("Hi there, welcome to my assignment!");
});

// Task 2:
app.get("/speak/:animal", function (req, res) {
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "Meow Meow",
        frog: "Beck Beck"
    }
    var sound = sounds[animal];
    // var sound = "";
    // if(animal === "pig") {
    //     sound = "Oink";
    // } else if(animal === "cow") {
    //     sound = "Moo";
    // }
    //res.send("This is the Speak route!");
    res.send("The " + animal + " says '" + sound + "'");
});

// Task 3: 
app.get("/repeat/:message/:times", function (req, res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";

    for (var i = 0; i < times; i++) {
        result += message + " ";
    }
    res.send(result);
    // res.send("Message: " + message + " Times: " + times);
});

// Task 4: 
app.get("*", function (req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
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