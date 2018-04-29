var squares = document.querySelectorAll(".square");
var headerDisplay = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");

var colors = generateColors(6);
var pickedColor = pickColor();


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
			changeColors(pickedColor);
		} else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
		headerDisplay.style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(elements){
	var colors = [];
	for(var i = 0; i < elements; i++){
		colors.push(generateColor());
	}
	return colors;
}

function generateColor() {
	return "rgb("+generateNumber()+", "+generateNumber()+", "+generateNumber()+")";
}

function generateNumber() {
	return Math.floor(Math.random() * 256);
}