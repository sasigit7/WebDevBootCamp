var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
  // alert("CLICKED RESET BUTTON");
  // Generate all new colors
  colors = generateRandomColors(6);
  //Pick a new random color from an array
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
  }
    h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // Add click listeners to squares
    squares[i].addEventListener("click", function () {
        // alert("Clicked a square"); Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // Compare color to picked color
        //console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            // alert("Correct!");
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            // alert("Wrong!!");
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}

function changeColors(color) {
    //Loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // Change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // Make an array
    var arr = [];
    // Repeat num times
    for (var i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    }
    // Return that array
    return arr;
}

function randomColor() {
    // pick a "red" from 0 -255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 -255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}