const thundercatsService = require('../services/thundercats.service');

const homeThundercatsController = (req, res) => {
  res.send('home paletas');
};

const findThundercatsController = (req, res) => {
  const allthundercats = thundercatsService.findThundercatsService();
  res.send(allthundercats);
};

const findThundercatsByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenCat = thundercatsService.findthundercatsByIdService(idParam);
  res.send(chosenCat);
};

const findCatsByValorController = (req, res) => {
  const valorParam = req.params.valor;
  const chosenCats = thundercatsService.findCatsByValorController(valorParam);
  res.send(chosenCats);
};

module.exports = {
  findThundercatsController,
  findThundercatsByIdController,
};
