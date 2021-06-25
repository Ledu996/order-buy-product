const express = require('express');
const fs = require('fs');
const path = require('path');
const Proizvod = require('./model/proizvod');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');




app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/public/js')));
app.use(express.static(path.join(__dirname, '/public/images/')));
console.log(__dirname + '/public/images/bread.jpg');

app.listen(3000);

app.get('/', (req, res) => {
    Proizvod.getAll().then(data => {
        console.log(data);
            data.forEach((currentValue, index, array) => {
                console.log(currentValue.ID);
            })
        res.render('index', { title: 'Home', data: data, nav: ["Home", "Proizvodi", "Prijava"]});
        
    });
    
});

app.get('/about', (req, res) => {
    //res.send('About Us');
    res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/home', (req, res) => {
    res.redirect('/');
});

app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname });
});