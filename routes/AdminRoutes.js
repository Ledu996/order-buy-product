const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');


// putanje

router.get('/create', (req, res) => {
    res.render('./proizvodi/createProizvod');
})

router.get('/update',(req,res) => {
    res.render('./proizvodi/updateProizvod');
})



router.post('/create', AdminController.create)

router.put('/:id/update', AdminController.update)

router.delete('/delete', AdminController.delete)




module.exports = router;
