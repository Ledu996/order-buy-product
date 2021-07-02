const connection = require('../config/db');

const Proizvod = {};

Proizvod.getAll = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM proizvod';
        connection.query(query, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

Proizvod.getById = (id) => {
    console.log('id promisa: ' + id);
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM proizvod WHERE PROIZVOD_ID	 = ${id} `;
        connection.query(query, (err, result) => {
            if(err) throw err;
            resolve(result);
        })
    })
};

Proizvod.search = (search) => {
    return new Promise((resolve, reject) => {
        search = `%${search}%`;
        const query = 'SELECT * FROM proizvod WHERE IME LIKE ? OR OPIS LIKE ?';
        connection.query(query, [ search, search ], (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

Proizvod.create = (kategorijaId, ime, opis, adresaSlike, cena) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO proizvod(KATEGORIJA_ID, IME, OPIS, ADRESA_SLIKE, CENA) VALUES ?";
        const vrednosti = [[ kategorijaId, ime, opis, adresaSlike, cena ]];
        connection.query(query, [vrednosti], (err, result) => {
            if (err) throw err;
            resolve(1);
        });
    });
};

Proizvod.update = (id, kategorijaId, ime, opis, adresaSlike, cena) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE proizvod SET ? WHERE PROIZVOD_ID = ${id} `;
        const vrednosti = [[ kategorijaId, ime, opis, adresaSlike, cena ]];
        connection.query(query, [vrednosti], (err, result) => {
            if (err) throw err;
            resolve(1);
        });
    });
};

Proizvod.delete = (id) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM proizvod WHERE PROIZVOD_ID = ${id}`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            resolve(1);
        });
    });
};

module.exports = Proizvod;