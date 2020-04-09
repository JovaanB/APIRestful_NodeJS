'use strict';
const sql = require('./dbPraticiens');

// Constructeur Praticien
function Praticien(praticien) {
  this.id = praticien.id;
  this.nom = praticien.nom;
  this.prenom = praticien.prenom;
  this.adresse = praticien.adresse;
  this.coef_notoriete = praticien.coef_notoriete;
  this.code_type_praticien = praticien.code_type_praticien;
  this.id_ville = praticien.id_ville;
}

// Création d'un praticien
Praticien.createPraticien = (newPraticien, result) => {
  sql.query('INSERT INTO praticien SET ?;', newPraticien, (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

// Modification d'un praticien
Praticien.updatePraticien = (id, praticien, result) => {
  sql.query(
    'UPDATE praticien SET ? WHERE id = ?;',
    [praticien, id],
    (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

// Suppression d'un praticien
Praticien.deletePraticien = (id, result) => {
  sql.query('DELETE FROM praticien WHERE id = ?;', [id], (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

// Liste des praticiens limité, prêt pour pagination
Praticien.getAllPraticiens = (numPage, filter, limit, result) => {
  let offset = (numPage - 1) * limit;
  sql.query(
    `SELECT SQL_CALC_FOUND_ROWS p.id, p.nom, prenom, adresse, coef_notoriete, p.id_ville, p.code_type_praticien, v.code_postal AS 'code_postal', v.nom AS 'ville', tp.libelle AS 'type_praticien' 
      FROM praticien p 
      INNER JOIN ville v ON id_ville = v.id 
      INNER JOIN type_praticien tp ON code_type_praticien = tp.code 
      WHERE p.nom LIKE '%${filter}%' 
      ORDER BY p.id DESC 
      LIMIT ${limit} 
      OFFSET ${offset};`,
    (err, res) => {
      if (err) result(err);
      else {
        sql.query('SELECT FOUND_ROWS() as cnt', 0, (err, r) => {
          if (err) result(err);
          else {
            result(res, r[0].cnt);
          }
        });
      }
    }
  );
};

// Informations d'un praticien par ID
Praticien.getPraticienById = (praticienId, result) => {
  sql.query(
    'SELECT * FROM praticien WHERE id = ? ',
    praticienId,
    (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Praticien;
