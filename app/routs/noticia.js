module.exports = function (app) {
    
    app.get('/noticia', function (req, res) {
    
    var connection = app.config.dbconnection();
    var noticiasModels = app.app.models.noticiasModels;
       
       noticiasModels.getNoticia(connection, function(error, result){
           res.render("noticias/noticia", { noticia : result });
       });
        
    });
};