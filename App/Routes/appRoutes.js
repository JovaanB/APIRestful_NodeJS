module.exports = function(app) {
  const praticiens = require('../Controllers/appController');
  const medicaments = require('../Controllers/appController');

  // praticiens routes
  app
    .route('/praticiens')
    .get(praticiens.nombres_pages_praticiens)
    .post(praticiens.create_praticien);

  app.route('/praticiens/:numPage').get(praticiens.list_all_praticiens);

  app
    .route('/praticiens/id/:praticienId')
    .get(praticiens.read_praticien)
    .put(praticiens.update_praticien)
    .delete(praticiens.delete_praticien);

  // médicaments routes
  app
    .route('/medicaments')
    .get(medicaments.nombres_pages_medicaments)
    .post(medicaments.create_medicament);

  app.route('/medicaments/:numPage').get(medicaments.list_all_medicaments);

  app
    .route('/medicaments/id/:medicamentId')
    .get(medicaments.read_medicament)
    .put(medicaments.update_medicament)
    .delete(medicaments.delete_medicament);
};
