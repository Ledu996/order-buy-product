const Porudzbina = require('../model/porudzbina');
const Proizvod = require('../model/proizvod');
const Korisnik = require('../model/korisnik');
const Kategorija = require('../model/kategorija');

// Admin

exports.getAll = (req, res) => {
    const id = req.session.user_id;
    const email = req.session.email;
    const phone = req.session.phone;
    let prijava = '';
    if(id){
        prijava = 'Odjavi se'
        Porudzbina.getAll().then(data => {
            res.render('./porudzbine/svePorudzbine', {porudzbina: data, prijava: prijava, naslov: ''});
        })
    }else {
        res.redirect('/auth/login');
    }
       
};



exports.getById = (req, res) => {
    const id = req.params.id;
    let [prijava, dugme] = ['', ''];
    Porudzbina.getById(id).then(data => {
        if(req.session.user_id){
            prijava = 'Odjavi se';
            dugme = 'Naruci';
        }else {
            prijava = 'Prijavi se';
            dugme = 'Prijava';
        }
        
        res.render('./porudzbine/porudzbineCreate', {prijava: prijava, naslov: 'Naruci Proizvode'});

        //res.render('./proizvodi/proizvod', { proizvod: data });
        //@TODO: napraviti templejt
    });
};

exports.getCertainProduct = (req, res) => {
    const id = req.params.id;
    let prijava = '';

    if(req.session.user_id) {
        prijava = 'Odjavi se'
    }else {
        prijava = 'Prijavi se '
    }
        Proizvod.getById(id).then(proizvodData => {
            Kategorija.get(proizvodData[0].KATEGORIJA_ID).then(kategorija => {
                res.render('./porudzbine/porudzbineCreate', {data: proizvodData[0], prijava: prijava, kategorijaNaziv: kategorija[0].NAZIV, naslov: ''});
            })
        })
}


exports.create = (req, res) => {

    const userId = req.session.user_id;
    
    if (userId) {
        const newPorudzbina = req.body;
        console.log(newPorudzbina);

        // SQL QUERY: SELECT * FROM `porudzbina` WHERE KORISNIK_ID = 20 ORDER BY DATUM DESC LIMIT 3;
        // porudzbina getLatest KORISTI QUERY vraca tri porudbine najsvezije uzeti tajmstapmove porediti sa 
        // trenutnim vremenom new Date(), niz tri porudzbine i porediti ih 1000 * 60 * 10 (length === 3 > 3)
        Porudzbina.create(userId, newPorudzbina.proizvodId, newPorudzbina.komentar).then(data => {
            // @TODO: promeniti rutu
            res.redirect('/porudzbine');
        });
    } else {
        res.redirect('/auth/login');
    }

};


exports.update = (req, res) => {

    const userId = req.session.user_id;

    if (userId) {
        const id = req.params.id;

        Porudzbina.update(id, req.body.komentar).then(data => {
            // @TODO: promeniti rutu
            res.redirect('/ruta');
        });
    } else {
        res.redirect('/auth/login');
    }

};


exports.delete = (req, res) => {
    console.log('POKRENUT DELETE');
    const userId = req.session.user_id;

    if (userId) {
        const id = req.params.id;

        Porudzbina.delete(id).then(data => {
            console.log('Deleted')
            res.status(200).end();
        });
    } else {
        res.redirect('/auth/login');
    }

};