//var dbconnection = require('../../config/dbconnection'); antes do consign

module.exports = function(application){
    
    application.get('/noticias', function(req, res){
    
    var connection = application.config.dbconnection();
    var noticiasModels = application.app.models.noticiasModels;

    noticiasModels.getNoticias(connection,  function(error, result){
            res.render("noticias/noticias", { noticias : result })
        });

    });
};
