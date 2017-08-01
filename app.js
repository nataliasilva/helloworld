var app = require('./config/server');
var msg = require('./mod_test');

app.listen(3000, function(){
    console.log("Servidor rodando com Express");
});

//antes do consign
//var rotaNoticias = require('./app/routs/noticias')(app);

//var rotaHome = require('./app/routs/home')(app);

//var rotaForm = require('./app/routs/formulario_addLeitoras')(app);