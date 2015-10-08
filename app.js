/*
	Server - the lazy foreman

	The server doesn't do any drawing itself.  It just relays drawing messages
	between all the connected clients.
*/

var express = require("express");
var app = express()

var path = require("path");
var publicPath = path.join(__dirname, "public");
var staticServer = express.static(publicPath);
app.use(staticServer);

var port = process.env.PORT || 8080;
var server = app.listen(port);
var io = require("socket.io")(server);

io.on("connection", function(socket){
	socket.on("drawing", function(lineJSON){
		socket.broadcast.emit("drawToCanvas", lineJSON)
	})
})
