module.exports = function (application) {
    application.get('/formulario_addLeitoras', function (req, res) {
        res.render("admin/form_add_leitoras");
    });


 application.post('/noticias/salvar', function (req, res) { 
    var noticia = req.body;
    
    //recuperando a conexão
    //recupendo model
    var connection = application.config.dbconnection();
    var noticiasModels = application.app.models.noticiasModels;

    noticiasModels.salvarNoticias(noticia, connection,  function(error, result){
        console.log(error);  
        res.render("noticias/noticias", {noticias : result});
        });
    //res.render("admin/form_add_leitoras");

 });

 };