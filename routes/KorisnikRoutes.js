const KorisnikController = require('../controllers/KorisnikController');
const express = require('express');
const router = express.Router();



router.get('/podesavanja/:id', KorisnikController.getKorisnik);

router.get('/podesavanja:id/update', (req, res) => {
    
    res.render('./korisnik/updateKorisnik');
}) 

router.put('/podesavanja:id/update', KorisnikController.updateKorisnik);

router.delete('korisnik:id/delete', KorisnikController.deleteKorisnik);


module.exports = router;