const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const Proizvod = require('./model/proizvod');
const proizvodRoutes = require('./routes/ProizvodRoutes');
const korisnikRoutes = require('./routes/KorisnikRoutes');
const app = express();
require('dotenv').config()

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/public/js')));
app.use(express.static(path.join(__dirname, '/public/images/')));

// konfiguracija sesije

app.use(session({
    name: process.env.SESSION_NAME,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60,
        sameSite: true
    }
}));

// rute
app.use('/proizvodi', proizvodRoutes);
app.use('/korisnici', korisnikRoutes);

/*
app.get('/', (req, res) => {
    res.render('');
});
*/
app.get('/about', (req, res) => {
    //res.send('About Us');
    res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/home', (req, res) => {
    res.redirect('/');
});

app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname });
});

app.listen(3000);