//require é uma funcao js que permite incorporar outros aquivos ao nosso arquivo. 
//POsso importar um módulo, uma biblioteca, outras paginas.
//enfim eu uso pra acrescentar alguma coisa ao meu script, nesse caso a biblioteca http 
var http = require('http');

var server = http.createServer(function (req, res) {
     var categoria = req.url;
     if(categoria == '/tecnologia'){
        res.end("<html><body><h1><center>Noticias de Tecnologia</center></h1></body></html>");

     } else if (categoria == '/moda' ){
         res.end("<html><body><h1><center> Noticias de Moda</center></h1></body></html>");

     } else if (categoria == '/beleza'){
         res.end("<html><body><h1><center> Noticias de Beleza</center></h1></body></html>");

     }else{
         res.end("<html><body><h1><center>Portal de Noticias</center></h1></body></html>");
     }
});
server.listen(3000);