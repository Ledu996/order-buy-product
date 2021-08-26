const database = require('../config/db');


const Korisnik = {};

Korisnik.getAll = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM korisnik';
        database.query(query, (err, result) => {
            if (err) throw err;
            resolve(result);
        })
    })
}


Korisnik.getById = (id) => {
    // setings prikaz podataka korisnika
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM korisnik WHERE KORISNIK_ID = ${id}`;
        database.query(query, (err, result) => {
            if (err) throw err;
            resolve(result); // objekat korisnik sa datim id
        })
    })
}

Korisnik.getByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM korisnik WHERE EMAIL = '${email}'`;
        database.query(query, (err, result) => {
            if (err) throw err;
            resolve(result); // objekat korisnik sa datim id
        })
    });
}

Korisnik.create = (ime, email, brojTelefona, lozinka, salt) => {
    return new Promise((resolve, reject) => {
            const query = 'INSERT INTO korisnik(ROLA_ID, IME, EMAIL, BROJ_TELEFONA, LOZINKA, SALT) VALUES(?)';
            const vrednosti = [[2, ime, email, brojTelefona, lozinka, salt]];
                database.query(query, vrednosti, (err, result) => {
                    if(err) throw err;
                    resolve(result);
            })
        })
}



Korisnik.update = (id, email, brojTelefona, lozinka) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE korisnik SET ? WHERE KORISNIK_ID = ${id} `
        const vrednosti = [[email, brojTelefona, lozinka]];
        database.query(query, vrednosti, (err, result) => {
                if(err) throw err;
                resolve(result);
        })
    })
}


Korisnik.delete = (id) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE korisnik WHERE KORISNIK_ID = ${id}`;
        database.query(query, (err, result) => {
                if(err) throw err;
                resolve(result);
        })
    })
}

Korisnik.findByEmailOrBrojTelefona = (email, brojTelefona) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM korisnik WHERE EMAIL = ? OR BROJ_TELEFONA = ?";
        database.query(query, [ email, brojTelefona ], (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    });
}

Korisnik.findndByEmailAndLozinka = (email, lozinka) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM korisnik WHERE EMAIL = ? AND LOZINKA = ?";
        database.query(query, [ email, lozinka ], (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    });
}


module.exports = Korisnik;

