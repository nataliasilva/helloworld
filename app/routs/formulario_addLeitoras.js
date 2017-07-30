
module.exports = function (app) {
    app.get('/formulario_addLeitoras', function (req, res) {
        res.render("admin/form_add_leitoras");
    });
};