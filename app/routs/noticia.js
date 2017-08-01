module.exports = function (app) {
    
    app.get('/noticia', function (req, res) {
    
    var connection = app.config.dbconnection();
    
        connection.query('select * from noticias where id_noticias = 2', function (error, result) {
                res.render("noticias/noticia", { noticia : result });
        });

    });
};