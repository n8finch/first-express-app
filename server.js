var express = require('express'),
	bodyParser = require('body-parser'),
	app		= express();


app.use(bodyParser.urlencoded());

var names = [];

app.all('/', function(req, res, next) {
	console.log('from ALL');
	next();
})

app.get('/', function(req, res, next) {
	console.log(names);
	next();

}, function(req, res) {
	res.render('index.jade', {names: names});
});

app.post('/', function(req, res) {
	names.push(req.body.name);
	res.redirect('/');
});

app.listen(3000, function() {
	console.log('listing on port 3000');
});

