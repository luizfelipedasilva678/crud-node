const express = require('express');
const route   = express.Router();

const homeController     = require('./src/controllers/homeController');
const contactController  = require('./src/controllers/contactController');
const talkToUsController = require('./src/controllers/talkToUsController');


route.get('/', homeController.renderHome);

route.get('/contacts', contactController.render);
route.get('/contacts/delete/:id', contactController.deleteContact);

route.get('/contacts/register', contactController.renderContactForm);
route.post('/contacts/register', contactController.getFormData);

module.exports = route;

