const Proizvod = require('../model/proizvod');

exports.getAll = (req, res) => {
    Proizvod.getAll().then(data => {
        res.render('proizvodi/products', { proizvodi: data, nav: ["Home", "Products", "LogIn"], linkovi: ['/', '/proizvodi', 'korisnik']});
    });
};

exports.getById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    Proizvod.getById(id).then(data => {
        console.log(data);
        res.render('./proizvodi/proizvod', { proizvod: data });
    });
};

exports.search = (req, res) => {
    const query = req.query.q;

    Proizvod.search(query).then(data => {
        res.render('proizvodList', { proizvodi: data });
    });
};

exports.getForm = (req, res) => {
    res.render('./proizvodi/createProizvod');
}

exports.create = (req, res) => {
    const newProizvod = req.body;

    Proizvod.create(newProizvod.kategorijaId, newProizvod.ime, newProizvod.opis, newProizvod.adresaSlike, newProizvod.cena).then(data => {
        // @TODO: promeniti rutu
        res.redirect('/ruta');
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    const newProizvod = req.body;

    Proizvod.update(id, newProizvod.kategorijaId, newProizvod.ime, newProizvod.opis, newProizvod.adresaSlike, newProizvod.cena).then(data => {
        // @TODO: promeniti rutu
        res.redirect('/ruta');
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Proizvod.delete(id).then(data => {
        res.status(200).end();
    });
};