var mysql = require('mysql');

var connMySQL = function() {
    console.log('conexão com bd estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });

}
module.exports = function () {
   console.log('O autoload carregou o modulo de conexao com o bd ');
    return connMySQL;
};