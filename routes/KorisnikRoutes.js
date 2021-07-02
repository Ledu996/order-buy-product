const KorisnikController = require('../controllers/KorisnikController');
const express = require('express');
const router = express.Router();

router.get('/korisnici', KorisnikController.getAll);

router.get('/podesavanja/:id', KorisnikController.getKorisnik);

/*router.get('/register', KorisnikController.getForm);

router.post('/register', KorisnikController.createKorisnik);*/

router.put('/podesavanja:id/update', KorisnikController.updateKorisnik);

router.delete('korisnik:id/delete', KorisnikController.deleteKorisnik);



module.exports = router;