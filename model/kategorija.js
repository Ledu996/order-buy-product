
const db = require('../config/db');

const Kategorija = {};

Kategorija.getAll = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM kategorija';
        db.query(query, (err, result) => {
            if (err) throw err;
            resolve(result);
        })
    })
}
Kategorija.get = (id) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM kategorija WHERE KATEGORIJA_ID = ${id}`
        db.query(query, (err, result) => {
            if (err) throw err;
            resolve(result);
        })
    })
}



Kategorija.create = (nazivKategorije) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO kategorija(NAZIV) VALUES(?)';
        const vrednosti = nazivKategorije;
        db.query(query, [vrednosti, vrednosti], (err, result) => {
            if (err) throw err;
            resolve(result);
        })
    })
}


Kategorija.update = (id) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE kategorija SET WHERE KATEGORIJA_ID = ${id}`;
        db.query(query, (err, result) => {
            if (err) throw err;
            resolve(result);
        })
    })
}

Kategorija.delete = (id) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM kategorija WHERE KATEGORIJA_ID = ${id}`;
        db.query(query, (err, result) => {
            if (err) throw err;
        })
    })
}



module.exports = Kategorija;











