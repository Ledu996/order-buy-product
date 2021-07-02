const Korisnik = require('../model/korisnik');
const bcrypt = require('bcryptjs');

exports.registracija = (req, res) => {
    const userData = req.body;

    // trimovanje
    const ime = userData.ime.trim();
    const email = userData.email.trim();
    const brojTelefona = userData.brojTelefona.trim();
    const lozinka = userData.lozinka.trim();

    // @TODO: Validacija
    let isValid = true;

    if (isValid) {
        Korisnik.findByEmailOrBrojTelefona(email, brojTelefona).then(nizKorisnika => {
            if (nizKorisnika.length === 0) {

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(lozinka, salt, (err, hash) => {
                        Korisnik.create(ime, email, brojTelefona, lozinka).then(data => {
                            //res.redirect("");
                        });
                    });
                });

            } else {
                console.log('Email ili broj telefona vec postoje');
            }
        });
    }
}

exports.prijava = (req, res) => {
    const formData = req.body;

    const email = formData.email.trim();
    const lozinka = formData.lozinka.trim();

    // @TODO: Validacija
    let isValid = true;

    if (isValid) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(lozinka, salt, (err, hash) => {
                
                Korisnik.findndByEmailAndLozinka(email, lozinka).then(nizKorisnika => {
                    if (nizKorisnika.length === 1) {
                        req.session.id = nizKorisnika[0].KORISNIK_ID;
                        res.redirect('/nalog');
                    } else {
                        console.log('Podaci nusi validni');
                    }
                });

            });
        });
    }
};