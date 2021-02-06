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

    res.send("Success");
}