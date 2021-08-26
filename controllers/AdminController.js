const Kategorija = require('../model/kategorija');
const Proizvod = require('../model/proizvod');


exports.getAll = (req, res) => {

        Proizvod.getAll().then(proizvodi => {
            res.render('./admin/proizvodiDashboard',{proizvodi: proizvodi});
        })
}


exports.create = (req, res) => {
    const body = req.body;

    const proizvodData = body;

    const isValid = true;

        if(isValid) {
            Proizvod.create(proizvodData.kategorija, proizvodData.ime, proizvodData.opis, proizvodData.adresaSlike, proizvodData.cena)
            .then(proizvod => {
                console.log('Proizvod kreiren')
            })
        }else {
            console.log('Uneti podaci nisu validni')
        }
        
}


exports.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const proizvodData = body;

    Proizvod.update(id, proizvodData.kategorija, proizvodData.ime, proizvodData.opis, proizvodData.adresaSlike, proizvodData.cena)
    .then(data => {
        console.log('Proizvod azuriran');
    })
}



exports.delete = (req, res) => {
    const id = req.params.id;
    Proizvod.delete(id).then(data => {
        res.redirect('/?Obavestenje= obrisanProizvod'); // Templejt za obrisan proizvod
    })
}




















