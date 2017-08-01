//var dbconnection = require('../../config/dbconnection'); antes do consign

module.exports = function (app) {
    
    app.get('/noticias', function (req, res) {
    
    var connection = app.config.dbconnection();
    
        connection.query('select * from noticias', function (error, result) {
            res.render("noticias/noticias", { noticias : result });
        });

    });
};
