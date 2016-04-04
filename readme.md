#Getting started with Express#

`npm init`

`npm install express`

Start with: 
```var express = require('express'),
	app		= express();```


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


