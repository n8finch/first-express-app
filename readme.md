#Getting started with Express#

`npm init`

`npm install express`

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
Can use mustache, handlebars, jade, etc.


`npm install -g nodemon`

Run the server from `server.js` on nodemon to produce the jade file in html: `nodemon server.js`

Don't want to use jade? You can use ejs via `npm install ejs`