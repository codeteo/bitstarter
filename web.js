var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
//	var buffer = new Buffe(100);
	output = fs.readFileSync('index.html').toString();
	response.send(output);
//	response.send('test test');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
