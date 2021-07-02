const path = require('path');

const express = require('express');

const ProizvodController = require('../controllers/ProizvodController');

const router = express.Router();


router.get('/', ProizvodController.getAll);

router.get('/:id', ProizvodController.getById);

router.get('/create', ProizvodController.getForm);

router.post('/', ProizvodController.create);

router.put('/:id', ProizvodController.update);

router.delete('/:id', ProizvodController.delete);


module.exports = router;

