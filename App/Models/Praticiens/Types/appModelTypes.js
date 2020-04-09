'use strict';
const sql = require('../dbPraticiens');

// Constructeur Type
function Type(type_praticien) {
  this.code = type_praticien.code;
  this.libelle = type_praticien.libelle;
  this.lieu = type_praticien.lieu;
}

// Recuperation de tous les types praticien
Type.getAllTypes = (result) => {
  sql.query('SELECT * FROM type_praticien', null, (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Type;
