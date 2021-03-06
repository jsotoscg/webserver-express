const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {


    res.render('home.hbs', {
        nomre: 'jesús soto elizondo',
        anio: new Date().getFullYear()
    });
})

app.get('/about', (req, res) => {


    res.render('about', {
        anio: new Date().getFullYear()
    });
})

// app.get('/odata', (req, res) => {
//     // res.send('Hello World')

//     let salida = {
//         nombre: 'Jesús Soto E.',
//         edad: 29,
//         url: req.url
//     }

//     res.send(salida)
// })

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})