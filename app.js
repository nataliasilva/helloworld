var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send("<html><title>♥Valentine's</title></title><body><h1>Natalia Silva</h1></body></html>");
});

app.get('/moda', function(req,res){
    res.send("<html><title>♥Valentine's</title></title><body><h1>Moda</h1></body></html>");
});

app.get('/vlogs', function(req,res){
    res.send("<html><title>♥ Valentine's</title></title><body><h1>Viagens e Dia-a-dia</h1></body></html>");
});

app.listen(3000, function(){
    console.log("Servidor rodando com Express");
});