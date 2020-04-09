'use strict';
const sql = require('../dbPraticiens');

// Constructeur Ville
function Ville(ville) {
  this.id = ville.id;
  this.nom = ville.nom;
  this.code_postal = ville.code_postal;
}

// Recuperation ville par code_postal
Ville.getVillesByCP = (code_postal, result) => {
  sql.query(
    "SELECT * FROM ville WHERE code_postal LIKE '%?%'",
    parseInt(code_postal),
    (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Ville;
