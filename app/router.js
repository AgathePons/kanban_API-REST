const express = require('express');
const cardController = require('./controllers/cardController');
const cardTagController = require('./controllers/cardTagController');
const listController = require('./controllers/listController');
const tagController = require('./controllers/tagController');

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
router.get('/tags', tagController.getAllTags);
router.post('/tags', tagController.createTag);
router.get('/tags/:id', tagController.getOneTag);
router.patch('/tags/:id', tagController.patchOneTag);
router.delete('/tags/:id', tagController.deleteOneTag);
// card-tags
router.post('/cards/:id/tags', cardTagController.asignTagToCard);
router.delete('/cards/:cardId/tags/:tagId', cardTagController.removeTagToCard);

module.exports = router;