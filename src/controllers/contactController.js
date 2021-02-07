const ContactModel = require("../models/ContactsModel");

let contactModel = new ContactModel();

module.exports.render = function renderHome(req, res) {
    contactModel.findAllContacts()
        .then((e) => {
            res.render('contacts', {title: 'Contacts', contractData: e});
        })
}

module.exports.renderContactForm = function renderContactForm(req, res) {
    res.render('register', {title: 'Register your contact'})
}

module.exports.getFormData = function getFormData(req,res) {
    let data = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone
    }

    contactModel.createContact(data);

    res.redirect("/contacts");
}

module.exports.deleteContact = function deleteContact(req, res) {
    contactModel.deleteContact(req.params.id);

    res.redirect("/contacts");
}

module.exports.editContact = function editContact(req, res) {
    console.log(req.query.name);

    res.render("edit", {
        title: 'Edit Contact',
        id: req.query.id,
        name: req.query.name, 
        surname: req.query.surname,
        email: req.query.email,
        phone: req.query.phone
    })
}

module.exports.getEditData = function getEditData(req, res) {
    let data = {
        id: req.body.id,
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone
    }

    contactModel.updateContact(data.name, data);

    res.redirect("/contacts");
}