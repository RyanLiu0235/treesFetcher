var app = require('express')();
var logger = require('morgan');
var bodyParser = require('body-parser');
var superagent = require('superagent');
var cors = require('cors');

var port = 4000;
var host = 'https://api.github.com';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('combined'));

app.get('/search/repositories', function(req, res) {
	var query = req.query.q;
	superagent
		.get(host + '/search/repositories')
		.query('q=' + query)
		.set('Accept', 'application/json')
		.end(function(err, data) {
			console.log(data.body)
			res.json(data.body);
		});
});


app.listen(port, function() {
	console.log('server is running at http://locahost:%d', port);
});