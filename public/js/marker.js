
function NewMarker(color, thickness) {
	this.color = color;
	this.thickness = thickness; 
}

NewMarker.prototype.drawLine = function(p1, p2){
	stroke(this.color.h, this.color.s, this.color.b)
	strokeWeight(this.thickness);
	line(p1.x, p1.y, p2.x, p2.y);
}