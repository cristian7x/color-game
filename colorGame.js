var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var headerDisplay = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode")


init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			// figure our how many squares to show
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++) {
		// Add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(pickedColor);
				headerDisplay.style.backgroundColor = pickedColor;
			} else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	// generate all the new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// change color of squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none"
		}
	}
	// clean display, background and button
	messageDisplay.textContent = "";
	headerDisplay.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function(){
		reset();
});

function changeColors(color) {
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(elements){
	// create an array
	var colors = [];
	for(var i = 0; i < elements; i++){
		colors.push(randomColor());
	}
	return colors;
}

function randomColor() {
	// pick a "red" from 0 - 255
	var red = Math.floor(Math.random() * 256)
	// pick a "green" from 0 - 255
	var green = Math.floor(Math.random() * 256)
	// pick a "blue" from 0 - 255
	var blue = Math.floor(Math.random() * 256)
	return "rgb(" + red + ", " + green + ", " + blue +")";
}