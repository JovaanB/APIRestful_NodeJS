'use strict';
const sql = require('./dbMedicaments');

// Constructeur Médicament
function Medicament(medicament) {
  this.MED_DEPOTLEGAL = medicament.MED_DEPOTLEGAL;
  this.MED_NOMCOMMERCIAL = medicament.MED_NOMCOMMERCIAL;
  this.FAM_CODE = medicament.FAM_CODE;
  this.MED_COMPOSITION = medicament.MED_COMPOSITION;
  this.MED_EFFETS = medicament.MED_EFFETS;
  this.MED_CONTREINDIC = medicament.MED_CONTREINDIC;
  this.MED_PRIXECHANTILLON = medicament.MED_PRIXECHANTILLON;
}

// Création d'un médicament
Medicament.createMedicament = (newMedicament, result) => {
  sql.query('INSERT INTO medicament SET ?;', newMedicament, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res.insertId);
    }
  });
};

// Modification d'un médicament
Medicament.updateMedicament = (id, medicament, result) => {
  sql.query(
    'UPDATE medicament SET ? WHERE MED_DEPOTLEGAL = ?;',
    [medicament, id],
    (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// Suppression d'un médicament
Medicament.deleteMedicament = (id, result) => {
  sql.query(
    'DELETE FROM medicament WHERE MED_DEPOTLEGAL = ?;',
    [id],
    (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// Liste des médicaments limité à 100, prêt pour pagination
Medicament.getAllMedicaments = (numPage, result) => {
  let offset = (numPage - 1) * 10;
  sql.query(
    'SELECT * FROM medicament LIMIT 10 OFFSET ? ;',
    offset,
    (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// Informations d'un médicament par ID
Medicament.getMedicamentById = (medicamentId, result) => {
  sql.query(
    'SELECT * FROM medicament WHERE MED_DEPOTLEGAL = ? ',
    medicamentId,
    (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Medicament;
