require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const mysql = require('./App/Models/Praticiens/dbPraticiens');

mysql.connection;

const app = express();
const port = process.env.PORT || 3000;

app.listen(port);
console.log('L\'API est démarré sur le port : ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./App/Routes/appRoutes');
routes(app);