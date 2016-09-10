var app = require('express')();
var logger = require('morgan');
var bodyParser = require('body-parser');
var superagent = require('superagent');

var port = 4000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('combined'));

// app.get('');


app.listen(port, function() {
	console.log('server is running at http://locahost:%d', port);
});