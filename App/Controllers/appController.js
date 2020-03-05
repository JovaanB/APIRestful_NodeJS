let Praticien = require('../Models/Praticiens/appModelPraticiens');
let Medicament = require('../Models/Medicaments/appModelMedicaments');
// Liste de tous les praticiens 
exports.list_all_praticiens = (req, res) => {
    Praticien.getAllPraticiens(req.params.numPage, (err, praticien) => {
        if(req.params.numPage < 1 || isNaN(req.params.numPage) ) {
            res.send("Veuillez entrer un numéro de page valide.")
        } else {
        if(err) {
            res.send(err);
        } else {
            res.send(praticien);
        }
    }
    })
}

// Nombre de pages pour praticiens
exports.nombres_pages = (req, res) => {
    Praticien.nombresPages((err, nombres) => {
        if(err) {
            res.send(err);
        } else {
            res.send(nombres);
        }
    })
}

// Informations d'un praticien par ID
exports.read_praticien = (req, res) => {
    Praticien.getPraticienById(req.params.praticienId, (err, praticien) => {
        if(err) {
            res.send(err);
        } else {
            res.json(praticien);
        }
    })
}

//  Création d'un praticien
exports.create_praticien = (req, res) => {
    let new_praticien = new Praticien(req.body);
    console.log("new_praticien: ",new_praticien);

    if(!new_praticien) {
        res.status(400).send({ error: true, message: "Merci de fournir un praticien..." })
    } else {
        Praticien.createPraticien(new_praticien, (err, praticien) => {
            if(err) {
                res.send(err);
            } else {
                res.json(praticien)
            }
        });
    }
};

// Mise à jour d'un praticien
exports.update_praticien = (req, res) => {
    Praticien.updatePraticien(req.params.praticienId, new Praticien(req.body), (err, praticien) => {
        if(err) {
            res.send(err);
        } else {
            res.json(praticien);
        }
    });
};

// Suppression d'un praticien
exports.delete_praticien = (req, res) => {
    Praticien.deletePraticien(req.params.praticienId, (err, praticien) => {
        if(err) {
            res.send(err);
        } else {
            res.json({ message: "Le praticien a bien été supprimé..." })
        }
    })
};

// Liste de tous les médicaments
exports.list_all_medicaments = (req, res) => {
    Medicament.getAllMedicaments(req.params.numPage, (err, medicament) => {
        if(err) {
            res.send(err);
        } else {
            res.send(medicament);
        }
    })
}

// Informations d'un médicament par ID
exports.read_medicament = (req, res) => {
    Medicament.getMedicamentById(req.params.medicamentId, (err, medicament) => {
        if(err) {
            res.send(err);
        } else {
            res.json(medicament);
        }
    })
}

//  Création d'un médicament
exports.create_medicament = (req, res) => {
    let new_medicament = new Medicament(req.body);

    if(!new_medicament) {
        res.status(400).send({ error: true, message: "Merci de fournir un médicament..." })
    } else {
        Medicament.createMedicament(new_medicament, (err, medicament) => {
            if(err) {
                res.send(err);
            } else {
                res.json(medicament)
            }
        });
    }
};

// Mise à jour d'un médicament
exports.update_medicament = (req, res) => {
    Medicament.updateMedicament(req.params.medicamentId, new Medicament(req.body), (err, medicament) => {
        if(err) {
            res.send(err);
        } else {
            res.json(medicament);
        }
    });
};

// Suppression d'un medicament
exports.delete_medicament = (req, res) => {
    Medicament.deleteMedicament(req.params.medicamentId, (err, medicament) => {
        if(err) {
            res.send(err);
        } else {
            res.json({ message: "Le médicament a bien été supprimé..." })
        }
    })
};