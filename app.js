var express = require('express');
var app = express();
var ejs = require('ejs');
var Dvd = require('./models/DVD');

app.set('view engine', 'ejs');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
	res.render('index', {
		title: 'DVD Search'
	});
});

app.get('/dvds', function(req, res) {
	// console.log(req);
	var validation = Dvd.validate({ title: req.query.title, award: req.query.award });

	if (validation.fails()) {
		console.log(validation.errors.first('title'));
		console.log(validation.errors.first('award'));
		return res.redirect('/');
	}

	// console.log(req.query.title)
	Dvd.findAll({
		where: {
			title: { like: '%' + req.query.title + '%' },
			award: req.query.award 
		},
		order: 'title DESC'
	}).then(function(results) {
		res.render('dvd', {
			title: 'dvds',
			dvds: results
		});
	});
});

app.listen(3000, function() {
  console.log('Listening at http://localhost:3000');
});