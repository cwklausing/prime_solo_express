var express = require('express');
var random = require('./modules/random.js');
//I don't get path--what's exactly is going on here?
var path = require('path');
var toDollars = require('./modules/todollars.js');
var combine = require('./modules/combine.js');
var app = express();

app.get('/', function(req,res,next){ 
   res.sendFile(path.join(__dirname, './index.html'));
});

app.use(express.static('static'));

app.get('/balance', function(req, res, next) {
	res.send('' + combine.thing1 + combine.thing2());
});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
});