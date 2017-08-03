module.exports = function(){

    this.getNoticias = function(connection, callback){
        connection.query('select * from noticias', callback);
    }

    this.getNoticia = function(connection, callback){
        connection.query('select * from noticias where id_noticias = 2', callback);
    }

    this.salvarNoticias = function(noticias, connection, callback){
        connection.query('insert into noticia set ?', noticias, callback);
    }
    return this;
}