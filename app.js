var app = require('./config/server');
var msg = require('./mod_test');

app.listen(app.get('porta'), function(){
    console.log(`Servidor rodando com Express na Porta ${app.get('porta')}`);
});

//antes do consign
//var rotaNoticias = require('./app/routs/noticias')(app);

//var rotaHome = require('./app/routs/home')(app);

//var rotaForm = require('./app/routs/formulario_addLeitoras')(app);