var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];
var messageDisplay = document.getElementById("message");

// Select squares and apply different colors from colors array above.
var squares = document.querySelectorAll(".square");
for (var i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // Add click listeners to squares
    squares[i].addEventListener("click", function () {
        // alert("Clicked a square"); Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // Compare color to picked color
        if (clickedColor === pickedColor) {
            // alert("Correct!");
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
        } else {
            // alert("Wrong!!");
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}

function changeColors(color) {
    //Loop through the squares
    for (var i = 0; i < squares.length; i++) {
        // Change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

// Style the header 
// var pickedColor = colors[3];
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}