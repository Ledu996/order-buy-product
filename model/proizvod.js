const connection = require('./db');

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
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM proizvod WHERE id = ${id} `;
        connection.query(query, (err, result) => {
            if(err) throw err;
            resolve(result);
        })
    })
}

module.exports = Proizvod;