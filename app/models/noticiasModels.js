module.exports = function(){

    this.getNoticias = function(connection, callback){
        connection.query('select * from noticias', callback);
    }

    this.getNoticia = function(connection, callback){
        connection.query('select * from noticias where id_noticias = 2', callback);
    }

    this.salvarNoticia = function(noticias, connection, callback){
       // console.log(noticias);
        connection.query('insert into noticias set ?', noticias, callback);
    }
    return this;
}