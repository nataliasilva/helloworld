module.exports = (application) => {
    application.get('/formulario_addLeitoras', (req, res) => res.render('admin/form_add_leitoras'));
    application.post('/noticias/salvar', (req, res) => {
        const noticias = req.body;
        // recuperando a conexão
        // recupendo model
        const connection = application.config.dbconnection();
        const noticiasModels = new application.app.models.noticiasModels;
        noticiasModels.salvarNoticia(noticias, connection, (error, result) => res.redirect('/noticias'));
        // res.render("admin/form_add_leitoras");;;
    });
}