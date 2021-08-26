const path = require('path');

const express = require('express');

const PorudzbinaController = require('../controllers/PorudzbinaController');

const router = express.Router();

router.get('/', PorudzbinaController.getAll);

router.get('/create/:id', PorudzbinaController.getCertainProduct)


router.get('/:id', PorudzbinaController.getById);

router.post('/create/:id', PorudzbinaController.create);

router.put('/:id', PorudzbinaController.update);

router.delete('/delete/:id', PorudzbinaController.delete);

module.exports = router;