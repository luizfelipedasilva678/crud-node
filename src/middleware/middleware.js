module.exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.send('BAD CSRF.')
    }
    next();
}

module.exports.csrfGlobalMiddleWare= (req, res, next) => {
   res.locals.csrfToken = req.csrfToken();
   next();
}

module.exports.userName = (req, res, next) => {
    res.locals.username = req.session.user;
    next();
}

module.exports.isLogged = (req, res, next) => {
    if(!req.session.user) {
        res.redirect('/user/login');
    }
    next();
}

module.exports.messages = (req, res, next) => {
    res.locals.myMessages = req.flash();
   next();
}
