var dbconnection = require('../../config/dbconnection');

module.exports = function (app) {
    var connection = dbconnection();
    app.get('/noticias', function (req, res) {


        connection.query('select * from noticias', function (error, result) {
            res.render("noticias/noticias", { noticias: result });
        });

    });
};