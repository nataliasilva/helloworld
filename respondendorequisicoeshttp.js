//require é uma funcao js que permite incorporar outros aquivos ao nosso arquivo. 
//POsso importar um módulo, uma biblioteca, outras paginas.
//enfim eu uso pra acrescentar alguma coisa ao meu script, nesse caso a biblioteca http 
var http = require('http');

var server = http.createServer(function(req, res){
   
    res.end("<html><body><h1><center>Portal de Noticias</center></h1></body></html>");
    
});
 server.listen(3000);