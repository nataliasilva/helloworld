module.exports = (app) => {

    app.get('/noticia', (req, res) => {

        var connection = app.config.dbconnection();
        var noticiasModels = app.app.models.noticiasModels;

        noticiasModels.getNoticia(connection, (error, result) => res.render("noticias/noticia", { noticia: result }));

    });
};