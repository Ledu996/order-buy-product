const Korisnik = require('../model/korisnik');


exports.getKorisnik = (req, res) => {
    
    const id = req.params.id;

        Korisnik.getById(id).then(data =>{
            let prijava = ''
            if(req.session.user_id) {
                prijava = 'Odjavi se';
            }else{
                prijava = 'Prijavi se';
            }
            res.render("./korisnik/podesavanjaPodaci", {data: data, prijava: prijava, naslov:'Podesavanja'});
        })
     
}



exports.updateKorisnik = (req, res) => {
    const id = req.params.id; // session id
    const newKorisnikData = req.body;

    Korisnik.update(id, newKorisnikData.ime, newKorisnikData.email, newKorisnikData.brojTelefona, newKorisnikData.lozinka).then(data => {
        res.redirect('/');
    })

}

exports.deleteKorisnik = (req, res) => {
    const id = req.params.id;
    Korisnik.delete(id).then(data => {
        res.redirect('/');
    })
}











