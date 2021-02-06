const express = require('express');
const route = express.Router();

const formHome = require('./src/controllers/homeController');
const contato  = require('./src/controllers/contatosController');


route.get('/', formHome.form, (req, res) => {
    console.log('Ainda estou aqui')
});
route.post('/', formHome.trataPost);

route.get('/contato', contato.fala)

module.exports = route;

/*
function meuMidleware(req, res, next) {
    req.session = {nome: 'Luiz', sobrenome: 'MIranda'};
    console.log();
    console.log('Passei no seu middleware');
    console.log();
    next();
}
*/
