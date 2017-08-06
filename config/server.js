var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.set('porta', 3000);
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

consign({ verbose: false })
    .include('app/routs')
    .then('config/dbconnection.js')
    .then('app/models')
    .into(app);

module.exports = app;