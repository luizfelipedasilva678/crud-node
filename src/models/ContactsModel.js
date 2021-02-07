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

    updateContact(id, data) {
        Model.findOneAndUpdate({_id: id}, {
            name: data.name,
            surname: data.surname,
            email: data.email,
            phone: data.phone
        })
        .then(e => console.log(e));
    }
    
    deleteContact(id) {
        Model.findByIdAndRemove(id, (err) => {
            console.log(err)
        });
    }

    async findAllContacts() {
       return await Model.find({});
    }
};