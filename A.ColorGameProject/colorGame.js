var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

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
            alert("Correct!");
        } else {
            alert("Wrong!!");
        }
    });
}

// Style
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
