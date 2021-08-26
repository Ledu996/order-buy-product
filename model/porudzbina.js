const connection = require('../config/db');

const Porudzbina = {};

Porudzbina.getAll = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM porudzbina';
        connection.query(query, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

Porudzbina.getById = (id) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM porudzbina WHERE PORUDZBINA_ID	= ${id} `;
        connection.query(query, (err, result) => {
            if(err) throw err;
            resolve(result);
        })
    })
};

Porudzbina.create = (korisnikId, proizvodId, komentar) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO porudzbina(KORISNIK_ID, PROIZVOD_ID, KOMENTAR, DATUM) VALUES ?";

        const now = new Date();

        const datum = `${now.getFullYear()}-0${now.getMonth()}-0${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

        console.log(datum);

        const vrednosti = [[ korisnikId, Number(proizvodId), komentar, datum ]];
        connection.query(query, [vrednosti], (err, result) => {
            if (err) throw err;
            resolve(1);
        });
    });
};

Porudzbina.update = (id, komentar) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE porudzbina SET ? WHERE PORUDZBINA_ID = ${id} `;
        const vrednosti = [[ komentar ]];
        connection.query(query, [vrednosti], (err, result) => {
            if (err) throw err;
            resolve(1);
        });
    });
};

Porudzbina.delete = (id) => {
    console.log(id);
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM porudzbina WHERE PORUDZBINA_ID = ${id}`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            resolve(1);
        });
    });
};

module.exports = Porudzbina;