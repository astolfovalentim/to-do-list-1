const express = require('express');
const router = express.Router();

const thundercatsController = require('../controllers/thundercats.controller');

router.get('/', thundercatsController.homeThundercatsController);
router.get('/find-cats', thundercatsController.findThundercatsController);
router.get(
  '/find-cat/:id',
  thundercatsController.findThundercatsByIdController,
);
router.get(
  '/find-cats-valor/:valor',
  thundercatsController.findCatsByValorController,
);

router.post('/add', thundercatsController.addCatsController);

router.put('/update/:id', thundercatsController.updateCatsController);

module.exports = router;
