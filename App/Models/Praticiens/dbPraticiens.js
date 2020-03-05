'use strict';

const mysql = require('mysql');

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: 'gsb_api_praticiens'
})

connection.connect(err => {
    if(err) throw err;
})

module.exports = connection;