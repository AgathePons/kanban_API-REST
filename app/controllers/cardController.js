const {
  Card
} = require('../models');

const cardController = {
  async getAllCards(req, res) {
    const cardsArray = await Card.findAll({
      include: [
        'tags',
        'list'
      ]
    });
    res.json(cardsArray);
  },
  async createCard(req, res) {
    const newCard = new Card({
      content: req.body.content,
      color: req.body.color,
      list_id: req.body.list_id
    });
    await newCard.save();
    res.status(201).json(newCard);
  },
  async getOneCard(req, res) {
    const id = req.params.id;
    const card = await Card.findByPk(id, {
      include: 'tags'
    });
    res.json(card);
  },
  async patchOneCard(req, res) {
    const id = req.params.id;
    const card = await Card.findByPk(id);
    card.content = req.body.content;
    card.color = req.body.color;
    card.list_id = req.body.list_id;
    card.position = req.body.position;
    await card.save();
    res.json(card); //! status ?
  },
  async deleteOneCard(req, res) {
    const id = req.params.id;
    const card = await Card.findByPk(id);
    await card.destroy();
    res.sendStatus(204);
  }
};

module.exports = cardController;