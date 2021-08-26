const db = require('../config/db');


const Adresa = {};

Adresa.getAddress = (ulica, broj, stan) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM adresa WHERE ULICA LIKE ? AND BROJ LIKE ? AND  STAN LIKE ?`;
        const vrednosti = [[ulica, broj, stan]]
        db.query(query, vrednosti, (err, result) => {
            if(err) throw err;
            resolve(result);
        })
    })
}

Adresa.create = (korisnikId, grad, ulica, broj, stan) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO adresa(KORISNIK_ID, GRAD, ULICA, BROJ, STAN) VALUES(?)';
        const vrednosti = [[korisnikId, grad, ulica, broj, stan]];
        db.query(query, vrednosti, (err, result) => {
            if(err) throw err;
            resolve(result);
        })
    })
    
}




module.exports = Adresa;