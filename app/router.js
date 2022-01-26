const express = require('express');
const cardController = require('./controllers/cardController');
const listController = require('./controllers/listController');

const router = express.Router();

// lists
router.get('/lists', listController.getAllLists);
router.post('/lists', listController.createList);
router.get('/lists/:id', listController.getOneList);
router.patch('/lists/:id', listController.patchOneList);
router.delete('/lists/:id', listController.deleteOneList);
// cards
router.get('/cards', cardController.getAllCards);
router.post('/cards', cardController.createCard);
router.get('/cards/:id', cardController.getOneCard);
router.patch('/cards/:id', cardController.patchOneCard);
router.delete('/cards/:id', cardController.deleteOneCard);
// tags



module.exports = router;