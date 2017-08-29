function Noticias() {

}

Noticias.prototype.getNoticias =  (connection, callback) => connection.query('select * from noticias', callback);


Noticias.prototype.getNoticia = (connection, callback) => connection.query('select * from noticias where id_noticias = 2', callback);


Noticias.prototype.salvarNoticia = (noticias, connection, callback) => connection.query('insert into noticias set ?', noticias, callback);
    //console.log(query);


module.exports = function() {
    return Noticias;
}
