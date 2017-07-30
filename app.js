var app = require('./config/server');
var msg = require('./mod_test');

var rotaNoticias = require('./app/routs/noticias')(app);

var rotaHome = require('./app/routs/home')(app);

var rotaForm = require('./app/routs/formulario_addLeitoras')(app);

app.listen(3000, function(){
    console.log("Servidor rodando com Express");
});