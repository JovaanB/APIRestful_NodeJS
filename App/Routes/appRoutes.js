module.exports = function (app) {
  const praticiens = require('../Controllers/appController');
  const medicaments = require('../Controllers/appController');
  const villes = require('../Controllers/appController');
  const types = require('../Controllers/appController');

  // praticiens routes
  app.route('/praticiens').post(praticiens.create_praticien);

  app
    .route('/praticiens/:filter*?/:limit/:numPage')
    .get(praticiens.list_all_praticiens);

  app
    .route('/praticiens/id/:praticienId')
    .get(praticiens.read_praticien)
    .put(praticiens.update_praticien)
    .delete(praticiens.delete_praticien);

  app.route('/villes/:code_postal').get(villes.get_villes_cp);

  app.route('/types/').get(types.list_all_types);

  // médicaments routes
  app.route('/medicaments').post(medicaments.create_medicament);

  app
    .route('/medicaments/:filter*?/:limit/:numPage')
    .get(medicaments.list_all_medicaments);

  app
    .route('/medicaments/id/:medicamentId')
    .get(medicaments.read_medicament)
    .put(medicaments.update_medicament)
    .delete(medicaments.delete_medicament);
};
