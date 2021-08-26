const express = require('express');
const router = express.Router();
const ProizvodController = require('../controllers/ProizvodController');



router.get('', ProizvodController.randomFiveProducts); // napraviti templejt


module.exports = router;










