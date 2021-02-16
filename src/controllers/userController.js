const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

let userModel = new UserModel();

module.exports.login = function login (req, res) {
    res.render('login', {title: 'Login'});
}

module.exports.loginUser = function loginUser (req, res) {
    let data = {
        login: req.body.login,
        password: req.body.password
    };

    userModel.authenticateUser(data.login)
        .then(user => {
            if(user.login === data.login) {
                bcrypt.compare(data.password, user.password, function(err, result) {
                    if(result) {
                        req.session.user = user.name;
                        res.redirect('/contacts');
                    } else {
                        req.flash('errors', 'There is erros in your password');
                        res.redirect('/user/login');
                    }
                });
            } 
        })
        .catch(e => {
            console.log(e);
            req.flash('errors', 'There is erros in your login')
            res.redirect('/user/login');
        });
}

module.exports.logOut = function logOut(req, res) {
    req.session.destroy();
    res.redirect('/user/login');
}

module.exports.createUser = function createUser (req, res) {
    res.render('create-account', {title: 'Create Account'});
}

module.exports.getFormData = function getFormData (req, res) {
    let data = {
        name: req.body.name,
        login: req.body.login
    };

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        if(err) {
            console.log(err);
        }else {
            userModel.createUser(data, hash);
        }
    });

    req.session.user = data.name;

    res.redirect('/contacts');
}
