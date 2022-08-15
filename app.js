const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
app.use(morgan('dev'));
const hbs = require('hbs');
const path = require('path');
path.join(__dirname, 'views');
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
hbs.registerPartials(path.join(__dirname, '/views/partials'));

const port = process.env.PORT || 3000;
const mysql = require('mysql2');
const routerHome = require('./routes/router-home');
const { all } = require('./routes/router-home');
const { default: knex } = require('knex');





//middelwares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));


















app.use('/', routerHome);
















app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
}
);









