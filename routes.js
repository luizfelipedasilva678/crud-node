const express = require('express');
const route   = express.Router();

const { isLogged } = require('./src/middleware/middleware');

const homeController     = require('./src/controllers/homeController');
const contactController  = require('./src/controllers/contactController');
const userController = require('./src/controllers/userController');

// Home
route.get('/', homeController.renderHome);

// Contacts
route.get('/contacts', isLogged ,contactController.render);
route.get('/contacts/delete/:id', isLogged ,contactController.deleteContact);
route.get('/contacts/edit',isLogged ,contactController.editContact);
route.post('/contacts/edit',isLogged ,contactController.getEditData);
route.get('/contacts/register',isLogged ,contactController.renderContactForm);
route.post('/contacts/register', isLogged ,contactController.getFormData);

// User
route.get('/user/login', userController.login);
route.post('/user/login', userController.loginUser);
route.get('/user/create', userController.createUser);
route.post('/user/create', userController.getFormData);
route.get('/user/logout', userController.logOut);

module.exports = route;

