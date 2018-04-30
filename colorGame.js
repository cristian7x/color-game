var squares = document.querySelectorAll(".square");
var headerDisplay = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	this.classList.add("selected");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none"
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	this.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block"
	}
});

resetButton.addEventListener("click", function(){
	// geenrate all the new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// change color of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	headerDisplay.style.backgroundColor = "#232323"
	resetButton.textContent = "New Colors"
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	// Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

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