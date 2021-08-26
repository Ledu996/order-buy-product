const AuthController = require('../controllers/AuthController');
const express = require('express');
const routes = express.Router();

routes.get('/login', (req, res) => {
    let prijava = ''
    if (req.session.user_id) {
        prijava = 'Odjavi se'
    } else {
        prijava = 'Prijavi se '
    }
    res.render('./korisnik/prijava', {naslov: 'Prijava', prijava: prijava});
});

routes.post('/login', AuthController.prijava);

routes.get('/register', (req, res) => {
    if (req.session.user_id) {
        //res.redirect('')
    } else {
        res.render('./korisnik/registracija', {naslov: 'Registracija'});
    }
});

routes.post('/register', AuthController.registracija);

routes.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) throw err;
        res.clearCookie('sid');
        return res.redirect('/');
    });
});



module.exports = routes;
