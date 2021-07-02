const Korisnik = require('../model/korisnik');

exports.getAll = (req, res) => {
    Korisnik.getAll().then(data =>{
        console.log(data);
        res.render("./korisnik/all", {data: data});
    })
}

exports.getKorisnik = (req, res) => {
    
    const id = req.params.id;

    Korisnik.getById(id).then(data =>{
        console.log(data);
        res.render("./korisnik/podesavanjaPodaci", {data: data});
    })
}

exports.getForm = (req, res) => {
    res.render("./korisnik/createKorisnik")
}

exports.createKorisnik = (req, res) => {
    const korisnikPodaci = req.body;

Korisnik.create(korisnikPodaci.IME, korisnikPodaci.EMAIL, korisnikPodaci.OPIS, korisnikPodaci.BROJ_TELEFONA, korisnikPodaci.LOZINKA).then(data => {
    res.redirect('/');
})
    
}

exports.updateKorisnik = (req, res) => {
    const id = req.params.id;
    const newKorisnikData = req.body;

    Korisnik.update(id, newKorisnikData.ime, newKorisnikData.email, newKorisnikData.brojTelefona, newKorisnikData.lozinka).then(data => {
        res.redirect('/');
    })

}

exports.deleteKorisnik = (req, res) => {
    
}











