const Korisnik = require('../model/korisnik');
const Adresa = require('../model/adresa');
const bcrypt = require('bcryptjs');
const Pomagaci = require('../utils/emails');
const Validation = require('../utils/validations');


exports.registracija = (req, res) => {
    const userData = req.body;

    // trimovanje
    const ime = userData.ime.trim();
    const email = userData.email.trim()
    const brojTelefona = userData.brojTelefona.trim()
    const lozinka = userData.lozinka.trim()

    const grad = userData.grad.trim();
    const ulica = userData.ulica.trim();
    const broj = userData.broj.trim();
    const stan = userData.stan.trim();

    // @TODO: Validacija

    const isValid = Validation.nameValidation(ime) && Validation.emailValidation(email)
        && Validation.phoneValidation(brojTelefona) && Validation.passwordValidation(lozinka);

    if (isValid) {
        Korisnik.findByEmailOrBrojTelefona(email, brojTelefona).then(nizKorisnika => {
            if (nizKorisnika.length === 0) {

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(lozinka, salt, (err, hash) => {

                        const novaLozinka = hash;
                        const noviSalt = salt;

                        Korisnik.create(ime, email, brojTelefona, novaLozinka, noviSalt).then(data => {

                            Korisnik.getByEmail(email).then(data => {
                                const korisnikId = data[0].KORISNIK_ID;

                                Adresa.create(korisnikId, grad, ulica, broj, stan).then(data => {

                                    // slanje mejla...

                                    res.redirect('/auth/login');
                                });
                            });

                        });
                    });
                });

            } else {
                console.log('Email ili broj telefona vec postoje');
            }
        });
    } else {
        res.redirect('/auth/register?errors=Greska');
    }
}

exports.prijava = (req, res) => {
    const formData = req.body;

    const email = formData.email.trim();
    const lozinka = formData.lozinka.trim();


    // @TODO: Validacija
    let isValid = Validation.emailValidation(email) && Validation.passwordValidation(lozinka);

    if (isValid) {

        Korisnik.getByEmail(email).then(data => {
            const salt = data[0].SALT;
            bcrypt.hash(lozinka, salt, (err, hash) => { // mozda se lozinka nece poklapati zbog algoritma 
                const hesovanaLozinka = hash;

                if (hesovanaLozinka == data[0].LOZINKA) {

                    req.session.user_id = data[0].KORISNIK_ID;
                    req.session.email = data[0].EMAIL;
                    req.session.phone = data[0].BROJ_TELEFONA;
                    req.session.role_id = data[0].ROLA_ID;

                    if (data[0].ROLA_ID == 1) {
                        res.redirect(`/korisnici/podesavanja/${data[0].KORISNIK_ID}`); // trenutna podesavanja
                    } else if (data[0].ROLA_ID == 2) {
                        res.redirect('/admin/create');
                    }
                } else {
                    console.log('Lozinke se ne poklapaju');
                    res.redirect('/auth/register');
                }
            });
        });

    } else {
        console.log('Podaci nisu validni');// Nalog ne postoji
        res.redirect('/auth/register');
    }
};



