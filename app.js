var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/moda', function(req, res){
    res.render("secao/moda");
});

app.get('/vlogs', function(req, res){
    res.render("secao/vlogs");
});

app.get('/', function(req, res){
    res.send("<html><title>♥Valentine's</title></title><body><h1>Natalia Silva</h1></body></html>");
});

app.listen(3000, function(){
    console.log("Servidor rodando com Express");
});