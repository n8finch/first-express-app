var express = require('express'),
	// bodyParser = require('body-parser'),
	app		= express();


// // app.set('env', 'development'); // process.env.NODE_ENV = 'production'
// // app.enable('trust proxy');
// // app.set('jsonp callback name', 'cb');

// // app.set('json replacer', function() {
// // 	if (attr === 'passwordHash') {
// // 		return undefined;
// // 	}
// // 	return val;
// // });

// // app.get('/user_info', function(req, res) {
// // 	//get user data
// // 	res.json(user); //JSON.stringify
// // });

// // app.enable('case sensitive routing'); // /hello and /Hello are different then.
// // app.enable('strict routing'); //  /hello/ and  /hello are different.

// // app.enable('view cache');  //speed up cache

// // app.set('view engine', 'jade');
// // app.set('views', templates);

// // app.enable('x-powered-by'); // express is the webserver


// function log (req, res, next) {
// 	console.log(names);
// 	next();
// }

// // app.use(bodyParser.urlencoded());

// // var names = [];



// // app.all('/', function(req, res, next) {
// // 	console.log('from ALL');
// // 	next();
// // })

// //custom middleware
// app.use(function (req, res, next) {
// 	console.log('this will log on every request');
// 	next();
// });

// app.get('/route', log , function(req, res) {
// 	res.send('this is a route');
// });

// app.use(express.static('./public'));

// app.param('name', function( req, res, next, name) {
// 		req.name = name[0].toUpperCase() + name.substring(1);
// 		next();

// 		//Get a user name, maybe with app.alL();
// 		Users.findOne({username: name}, function(err, user){
// 				req.user = user;
// 				next();
// 		});
// });


// app.get('/name/:name', function(req, res) {
// 	res.send('Your name is ' + req.name);
// });


//app.route can have methods chained to it
// app.route('/')
// 	.all( function() {
// 		//...
// 	})
// 	.get( function() {
// 		//...
// 	})
// 	.post( function() {
// 		//...
// 	});


// Router Object

var router = express.Router(); //can pass an object in here.

var APIv1 = express.Router(),
		APIv2 = express.Router();

APIv1.get('/names', function(req, res) {
	res.send('first from API 1');
});

APIv2.get('/names', function(req, res) {
	res.send('first from API 2');
});


router.use(function(req,res,next) {
	console.log('router specific middleware');
	next();
});

router.get('/', function(req,res) {
	res.send('router home route');
});

router.route('/test').get(function(req,res) {
	res.send('router test route');
});

// to actually use this router, you have to use it and pass it.

app.use('/api', router);

app.listen(3000, function() {
	console.log('listing on port 3000');
});

