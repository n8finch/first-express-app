#Getting started with Express#

`npm init`

`npm install express`

Start with: 

```
var express = require('express'),
	app		= express();
```


Run the server from `server.js`: `node server.js`

`npm install install jade --save-dev`

The rendering view can combine with a templating engine to create the templates we need:

```
app.get('/', function(req, res) {
	res.render('index.jade', {
			title: 'Hello Express & Jade'
	});
});
```

Where `req` is the request and `res` is the response.

Can use mustache, handlebars, jade, etc.


`npm install -g nodemon`

Run the server from `server.js` on nodemon to produce the jade file in html: `nodemon server.js`

Don't want to use jade? You can use ejs via `npm install ejs`



###Creating Routes###
"Verb Methods": CRUD: POST, GET, PUT DELTE

Express does not parse some requests, so we need to install middleware.

`npm install body-parser`

and then in the `var express`:

`app.use(bodyParser.urlencoded());` at t

makes sure that all the bodies of the forms are parsed before we get to the routes.


###Application Setttings###

`app.set()`: used to set a given function.
`app.enable()` and `app.disable()` are used for boolean functions.

`app.get()`: 
`app.enabled()` and `app.disabled()` are used for boolean functions.



```
app.set('env', 'development'); // process.env.NODE_ENV = 'production'
app.enable('trust proxy');
app.set('jsonp callback name', 'cb');

app.set('json replacer', function() {
	if (attr === 'passwordHash') {
		return undefined;
	}
	return val;
});

app.get('/user_info', function(req, res) {
	//get user data
	res.json(user); //JSON.stringify
});

app.enable('case sensitive routing'); // /hello and /Hello are different then.
app.enable('strict routing'); //  /hello/ and  /hello are different.

app.enable('view cache');  //speed up cache

app.set('view engine', 'jade');
app.set('views', templates);

app.enable('x-powered-by'); // express is the webserver
```

##Middleware and Express 4##

`app.use()` is what you use to call middleware (e.g. `bodyParser`).

See: 
https://github.com/senchalabs/connect
and
https://github.com/senchalabs/connect/wiki

request flow from top to bottom through layers. 

Custom middleware: you use `app.use()`, and you pass it a function that takes the three parameters `(req, res, next)`

Route functions: GET, PUT, POST, DELETE (CRUD).

Built-in middleware (most of this is removed now). 

One piece is `app.use(express.static('./public'));`

you do have to use `next();` in the custom middleware.


###App Parameters###

```
app.get('/name/:name', function(req, res) {
	res.send('Your name is ' + req.params.name);
});
```

use `app.param()` like this:

```
app.param('name', function( req, res, next, name) {
		req.name = name[0].toUpperCase + name.substring(1);
		next();
});
```

Always put this above the what you need.


###Shortcut syntax###

Instead of having everything separate:
app.all('/')
app.get('/')
app.post('/')

`app.route('/')` will return a route object with all methods available:
app.all()
app.get()
app.post()
app.put()
app.delete 
and these can be chained.

so you can just have:

```
app.route('/')
	.all( function() {
		//...
	})
	.get( function() {
		//...
	})
	.post( function() {
		//...
	});
```


###Router Object###

Is a mini application that runs inside the master express app.

```
var router = express.Router(); //can pass an object in here.

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

app.use('/', router);
```

To create different APIs

```
var APIv1 = express.Router(),
		APIv2 = express.Router();

APIv1.get('/names', function(req, res) {
	res.send('first from API 1');
});

APIv2.get('/names', function(req, res) {
	res.send('first from API 2');
});
```

###API Docs###
See: http://expressjs.com/en/4x/api.html


###Request Methods###
See: http://expressjs.com/en/4x/api.html#req


###Response Methods###

See: http://expressjs.com/en/4x/api.html#res

```
res.status(200)
res.set(header, value);
res.get(header);

res.cookie(name, value);
res.clearCookie(name);

res.redirect(status, path);
res.send(status, text);
res.json(status, object);
res.jsonp(status, object); //callback({})
res.download(file);

res.render(file, props, function( err, html) {
	//do something with the html
	res.send(200, html);
});
```


###response.format() Method###

using different response formats depending on what users need:

```
app.get('/', function (req, res) {
	res.format({
		'text/plain' : function() {
				res.send('text response');
		},
		'text/html' : function() {
				res.render('index.jade');
		},
		'application/json' : function() {
				res.json({ topic: 'Express' });
		}
	});
});
```

##Further Study##
http://expressjs.com/
https://github.com/expressjs/express

