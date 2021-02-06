const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, require: true},
    email: {type: String, require: true},
    phone: {type: String, require: false}
});

const Model = mongoose.model('Contact', ContactSchema);

module.exports = class ContactModel {
    
    createContact(data) {
        Model.create({
            name: data.name,
            surname: data.surname,
            email: data.email,
            phone: data.phone
        })
        .then(e => console.log(e));
    }

    updateContact() {

    }

    deleteContact() {

    }

    async findAllContacts() {
       return await Model.find({});
    }
};