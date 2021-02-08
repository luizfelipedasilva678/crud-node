const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    login: {type: String, required: true},
    password: {type: String, require: true}
});

const Model = mongoose.model('User', UserSchema);

module.exports = class UserModel {
    
    createUser(data, password) {        
        Model.create({
            name: data.name,
            login: data.login,
            password: password
        })
        .then(e => console.log(e));
    }

    async authenticateUser(login) {
        return Model.findOne({ login: login });
    }
};