module.exports.form = function formHome(req, res) {
    res.render('index', {
        titulo: 'Este será o título da página', 
        numeros: [0,1,2,3,4,5]
    });
}

module.exports.trataPost = function trataPost(req, res) {
    res.send(`Recebi seu formulario ${req.body.cliente}`);
}