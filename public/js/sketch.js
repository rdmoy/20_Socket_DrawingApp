/*

	Client-side Drawing Board

	p5 Hints
	========
	mouseIsPressed, mouseButton, LEFT, RIGHT
	http://p5js.org/reference/#/p5/mouseButton
*/
//server
var socket = io()

//global vars
var color;
var newLine;
var eraser;

//setup p5
function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0);
	strokeCap(ROUND)
	colorMode(HSB, 360, 100, 100);
	color = {h: random(0, 360), s: 100, b: 100}
	eraser = {h: 0, s: 0, b: 0}
	var newLines = new NewMarker(color, 10)
	newLine = newLines
	var erasers = new NewMarker(eraser, 50)
	eraser = erasers
}

//draw p5
function draw(){
	var p1 = {x: pmouseX, y: pmouseY}
	var p2 = {x: mouseX, y: mouseY}
	if (mouseIsPressed === true){
		if (mouseButton === LEFT){
			newLine.drawLine(p1, p2);
			var lineJSON = {
				"color": newLine.color,
				"thickness": newLine.thickness,
				"p1": p1,
				"p2": p2
			}
			socket.emit("drawing", lineJSON)
		}
		if (mouseButton === RIGHT){
			eraser.drawLine(p1,p2);
			var lineJSON = {
				"color": eraser.color,
				"thickness": eraser.thickness,
				"p1": p1,
				"p2": p2
			};
			socket.emit("drawing", lineJSON)
		}
	}
}

//socket calls
socket.on("connect",function(){
	console.log("connecting to server")
});

socket.on("drawToCanvas", function(lineJSON){
		var lineFrom = new NewMarker(lineJSON.color, lineJSON.thickness);
		lineFrom.drawLine(lineJSON.p1, lineJSON.p2)
});

//colorPicker DOM

var controls = document.querySelector(".controls");
var buttons = document.querySelectorAll(".controls .button");
controls.onclick = function(event){
	for (i=0; i<buttons.length; i++){
		if event.target === buttons[i] color = 
	}
}
console.log(buttonArray[0][0])

var colorPicker = function(){
	
}







