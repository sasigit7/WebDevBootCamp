var numSquares = 6; 
var colors = [];
var colors = generateRandomColors(numSquares);
var pickedColor; // var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // Mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}
function setupModeButtons() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            //Figure out how many squares to show
          // Pick new colors
          // Pick a new pickedColor
          // Update page to reflect changes
           modeButtons[0].classList.remove("selected"); 
           modeButtons[1].classList.remove("selected"); 
          this.classList.add("selected");
    
          this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        //   if(this.textContent === "Easy") {
        //       numSquares = 3;
        //   } else {
        //       numSquares = 6;
        //   }
          reset();
          
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // Add initial colors to squares
        // squares[i].style.backgroundColor = colors[i];
        // Add click listeners to squares
        squares[i].addEventListener("click", function () {
            // alert("Clicked a square"); Grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // Compare color to picked color
            //console.log(clickedColor, pickedColor);
            if (clickedColor === pickedColor) {
                // alert("Correct!");
                messageDisplay.textContent = "Correct!";
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
    } 


function reset() {
    colors = generateRandomColors(numSquares);
    //Pick a new random color from an array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
  
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
      h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function() {
//    //alert("EASY BUTTON CLICKED");
//    hardBtn.classList.remove("selected");
//    easyBtn.classList.add("selected");
//    numSquares = 3;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for(var i = 0; i < squares.length; i++) {
//        if(colors[i]) {
//            squares[i].style.backgroundColor = colors[i];
//        } else {
//            squares[i].style.display = "none";
//        }
//    }
// });

// hardBtn.addEventListener("click", function() {
//     //alert("HARD BUTTON CLICKED");
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++) {
//            squares[i].style.backgroundColor = colors[i];
//            squares[i].style.display = "block";
//        }
//  });

resetButton.addEventListener("click", function() {
  reset();
});

colorDisplay.textContent = pickedColor;

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