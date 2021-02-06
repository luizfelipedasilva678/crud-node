module.exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.send('BAD CSRF.')
    }
}

module.exports.csrfGlobalMiddleWare= (req, res, next) => {
   res.locals.csrfToken = req.csrfToken();
   next();
}

