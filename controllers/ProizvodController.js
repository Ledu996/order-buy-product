const Proizvod = require('../model/proizvod');
const Kategorija = require('../model/kategorija')


exports.getAll = (req, res) => { // get all proizvodi
    const mapaProizvoda = new Map();
    const nizKategorijaNaziv = [];
    let prijava = typeof req.session.user_id == 'number' ? 'Odjavi se' : 'Prijavi se';
    Kategorija.getAll().then(listaKategorija => {  
            for(let i = 0; i < listaKategorija.length; i++) {
                nizKategorijaNaziv.push(listaKategorija[i].NAZIV)
                mapaProizvoda.set(listaKategorija[i].KATEGORIJA_ID, []);
            }
        return mapaProizvoda;
        }).then(mapa => {
            
            Proizvod.getAll().then(sviProizvodi => {
                sviProizvodi.forEach(proizvod => {
                    mapa.get(proizvod.KATEGORIJA_ID).push(proizvod);
                })
                console.log(nizKategorijaNaziv);
                res.render('./proizvodi/proizvodList', {mapaProizvoda: mapa,  prijava: prijava, naslov: 'Proizvodi', nizImenaKategorija: nizKategorijaNaziv});
            })
        });
};

exports.randomFiveProducts = (req, res) => {
    
    Proizvod.randomFiveProducts().then(products => {
        let prijava = typeof req.session.user_id == 'number' ? 'Odjavi se' : 'Prijavi se';
        
        res.render('index', {naslov: '', prijava: prijava, produkti: products, dugme: dugme});
    })
}


exports.getKategorijaId = (req, res) => {
    const id = req.params.id;
    Proizvod.getKategorijaId(id).then(data => {
        Kategorija.get(data[0].KATEGORIJA_ID).then(kategorija => {
            let prijava = '';
            if(req.session.user_id){
                prijava = 'Odjavi se'
            }else{
                prijava = 'Prijavi se'
            }
            res.render('./kategorije/kategorijeProizvodi', {proizvodi: data, prijava: prijava, naslov: '', kategorije: kategorija[0].NAZIV});
        })
    })
}

exports.getById = (req, res) => {
    const id = req.params.id;
    const prijava = typeof req.session.user_id == 'number' ? 'Odjavi se' : 'Prijavi se';
    
    Proizvod.getById(id).then(data => {
        res.json(data);
        //res.render('./proizvodi/proizvod', { proizvod: data, prijava: prijava, naslov: 'Detalji Proizvoda'});
    });
};

exports.search = (req, res) => {
    const query = req.query.q;

    Proizvod.search(query).then(data => {
        res.render('proizvodList', { proizvodi: data });
    });
};


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