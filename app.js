"use strict";

/**
* Modules
*/
var express = require("express");
var path = require('path');
var exphbs  = require('express-handlebars');
var app = express();


/**
* Environment Setup
*/
// all environments
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
	res.render('index');
});

app.get('/second', function(req, res) {
	res.render('second',{title: 'This is the second page'});
});


app.listen(8888, function() {
	console.log("Server Started at port 8888");
});