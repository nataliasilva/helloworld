//var dbconnection = require('../../config/dbconnection'); antes do consign

module.exports = (application) => {

    application.get('/noticias', (req, res) => {

        var connection = application.config.dbconnection();
        var noticiasModels = new application.app.models.noticiasModels;

        noticiasModels.getNoticias(connection, (error, result) =>  res.render("noticias/noticias", { noticias : result }));
    });

    application.get('/teste', (req, res) => {

        var connection = application.config.dbconnection();
        var noticiasModels = new application.app.models.noticiasModels;

        noticiasModels.getNoticias(connection, (error, result) => res.status(200).json(result));
    });
};
