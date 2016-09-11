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

// 查找仓库，目前只支持了一个参数
app.get('/search/repositories', function(req, res) {
	var query = req.query.q;
	var token = req.query.token;
	if (!token) {
		return res.json({status: false, error_message: '为了确保您的查询不被中断，请先登录！'});
	}
	superagent
		.get(host + '/search/repositories')
		.query('q=' + query)
		.set('Accept', 'application/json')
		.set('Authorization', 'token ' + token)
		.end(function(err, data) {
			console.log(data.body)
			res.json(data.body);
		});
});

// 登录
app.get('/user', function(req, res) {
	var access_token = req.query.access_token;
	superagent
		.get(host + '/user')
		.set('Accept', 'application/json')
		.end(function(err, data) {
			if (err) {
				return res.json({status: false, error_message: '请求错误'});
			}

			console.log(data);
			res.json(data.body);
		})
})

app.listen(port, function() {
	console.log('server is running at http://locahost:%d', port);
});