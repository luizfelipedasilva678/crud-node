require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        app.emit('pronto')
    })
    .catch(err => console.error(err));

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');


const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const {checkCsrfError, csrfGlobalMiddleWare} = require('./src/middleware/middleware');

app.use(helmet());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'asdfwerwefwefsafsfsdfasfsafwefwefwefwefsa',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60  * 60 * 42 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
app.use(checkCsrfError);
app.use(csrfGlobalMiddleWare);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000); 
})
