'use strict';
const sql = require('./dbPraticiens');

// Constructeur Praticien
function Praticien(praticien) {
    this.nom = praticien.nom;
    this.prenom = praticien.prenom;
    this.adresse = praticien.adresse;
    this.coef_notoriete = praticien.coef_notoriete;
    this.code_type_praticien = praticien.code_type_praticien;
    this.id_ville = praticien.id_ville;
};

// Création d'un praticien
Praticien.createPraticien = (newPraticien, result) => {
    sql.query("INSERT INTO praticien SET ?;", newPraticien, (err, res) => {
        if(err) {
            result(null, err);
        } else {
            result(null, res.insertId);
        }
    })
};

Praticien.nombresPages = (result) => {
    sql.query("SELECT IF(COUNT(*)%100 = 0,TRUNCATE(COUNT(*)/100, 0),TRUNCATE(COUNT(*)/100+1, 0)) FROM praticien;", (err, res) => {
        if(err) {
            result(null, err);
        } else {
            result(null, res);
        }
    })
};

// Modification d'un praticien
Praticien.updatePraticien = (id, praticien, result) => {
    sql.query("UPDATE praticien SET ? WHERE id = ?;", [praticien, id], (err, res) => {
        if(err) {
            result(null, err);
        } else {
            result(null, res);
        }
    })
};

// Suppression d'un praticien
Praticien.deletePraticien = (id, result) => {
    sql.query("DELETE FROM praticien WHERE id = ?;", [id], (err, res) => {
        if(err) {
            result(null, err);
        } else {
            result(null, res);
        }
    })
};

// Liste des praticiens limité à 100, prêt pour pagination
Praticien.getAllPraticiens = (numPage, result) => {
    let offset = ((numPage-1) * 100);
    sql.query("SELECT * FROM praticien LIMIT 100 OFFSET ? ;", offset, (err, res) => {
        if(err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

// Informations d'un praticien par ID
Praticien.getPraticienById = (praticienId, result) => {
    sql.query("SELECT * FROM praticien WHERE id = ? ", praticienId, (err, res) => {
        if(err) {
            result(err, null);
        } else {
            result(null, res);
        }
    })
}

module.exports = Praticien;