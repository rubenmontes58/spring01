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
const homeRouter = require('./routes/router-home');
const { all } = require('./routes/router-home');



const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
connection.connect();
console.log('Base de datos conectada');

//middelwares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));


app.use(express.static(path.join(__dirname, 'public')));


















app.use('/', homeRouter);
















app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
}
);









