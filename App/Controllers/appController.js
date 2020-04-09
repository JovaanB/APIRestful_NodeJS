let Praticien = require('../Models/Praticiens/appModelPraticiens');
let Medicament = require('../Models/Medicaments/appModelMedicaments');
let Ville = require('../Models/Praticiens/Villes/appModelVilles');
let Types = require('../Models/Praticiens/Types/appModelTypes');

exports.list_all_praticiens = (req, res) => {
  Praticien.getAllPraticiens(
    req.params.numPage,
    req.params.filter || '',
    req.params.limit || 100,
    (praticien, nbResult) => {
      if (req.params.numPage < 1 || isNaN(req.params.numPage)) {
        res.send('Veuillez entrer un numéro de page valide.');
      } else {
        res.send({ praticiens: praticien, count: nbResult });
      }
    }
  );
};

exports.list_all_types = (req, res) => {
  Types.getAllTypes((err, types) => {
    if (err) {
      res.send(err);
    } else {
      res.send(types);
    }
  });
};

exports.list_all_medicaments = (req, res) => {
  Medicament.getAllMedicaments(
    req.params.numPage,
    req.params.filter || '',
    req.params.limit || 100,
    (medicament, nbResult) => {
      if (req.params.numPage < 1 || isNaN(req.params.numPage)) {
        res.send('Veuillez entrer un numéro de page valide.');
      } else {
        res.send({ medicaments: medicament, count: nbResult });
      }
    }
  );
};

// Informations d'un praticien par ID
exports.read_praticien = (req, res) => {
  Praticien.getPraticienById(req.params.praticienId, (err, praticien) => {
    if (err) {
      res.send(err);
    } else {
      res.json(praticien);
    }
  });
};

// Récupération des villes par code_postal
exports.get_villes_cp = (req, res) => {
  Ville.getVillesByCP(req.params.code_postal, (err, villes) => {
    if (err) {
      res.send(err);
    } else {
      res.json(villes);
    }
  });
};

//  Création d'un praticien
exports.create_praticien = (req, res) => {
  let new_praticien = new Praticien(req.body);
  if (!new_praticien) {
    res
      .status(400)
      .send({ error: true, message: 'Merci de fournir un praticien...' });
  } else {
    Praticien.createPraticien(new_praticien, (err, praticien) => {
      if (err) {
        res.send(err);
      } else {
        res.json(praticien);
      }
    });
  }
};

// Mise à jour d'un praticien
exports.update_praticien = (req, res) => {
  Praticien.updatePraticien(
    req.params.praticienId,
    new Praticien(req.body),
    (err, praticien) => {
      if (err) {
        res.send(err);
      } else {
        res.json(praticien);
      }
    }
  );
};

// Suppression d'un praticien
exports.delete_praticien = (req, res) => {
  Praticien.deletePraticien(req.params.praticienId, (err, praticien) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Le praticien a bien été supprimé...' });
    }
  });
};

// Liste de tous les médicaments
exports.list_all_medicaments = (req, res) => {
  Medicament.getAllMedicaments(req.params.numPage, (err, medicament) => {
    if (err) {
      res.send(err);
    } else {
      res.send(medicament);
    }
  });
};

// Informations d'un médicament par ID
exports.read_medicament = (req, res) => {
  Medicament.getMedicamentById(req.params.medicamentId, (err, medicament) => {
    if (err) {
      res.send(err);
    } else {
      res.json(medicament);
    }
  });
};

//  Création d'un médicament
exports.create_medicament = (req, res) => {
  let new_medicament = new Medicament(req.body);

  if (!new_medicament) {
    res
      .status(400)
      .send({ error: true, message: 'Merci de fournir un médicament...' });
  } else {
    Medicament.createMedicament(new_medicament, (err, medicament) => {
      if (err) {
        res.send(err);
      } else {
        res.json(medicament);
      }
    });
  }
};

// Mise à jour d'un médicament
exports.update_medicament = (req, res) => {
  Medicament.updateMedicament(
    req.params.medicamentId,
    new Medicament(req.body),
    (err, medicament) => {
      if (err) {
        res.send(err);
      } else {
        res.json(medicament);
      }
    }
  );
};

// Suppression d'un medicament
exports.delete_medicament = (req, res) => {
  Medicament.deleteMedicament(req.params.medicamentId, (err, medicament) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Le médicament a bien été supprimé...' });
    }
  });
};
