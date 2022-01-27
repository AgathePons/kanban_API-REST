const {
  Card
} = require('../models');

const cardController = {
  async getAllCards(req, res) {
    try {
      const cardsArray = await Card.findAll({
        include: [
          'tags',
          'list'
        ]
      });
      res.json(cardsArray);
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  },
  async createCard(req, res) {
    try {
      const newCard = new Card({
        content: req.body.content,
        list_id: req.body.list_id
      });
      if(req.body.color) {
        newCard.color = req.body.color;
      }
      await newCard.save();
      res.status(201).json(newCard);
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  },
  async getOneCard(req, res) {
    const id = req.params.id;
    try {
      const card = await Card.findByPk(id, {
        include: 'tags'
      });
      if(!card) {
        return res.status(404).json({ error: `No card with id ${id}`});
      }
      res.json(card);
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  },
  async patchOneCard(req, res) {
    const id = req.params.id;
    try {
      const card = await Card.findByPk(id);
      if(req.body.content) {
        card.content = req.body.content;
      }
      if(req.body.color) {
        card.color = req.body.color;
      }
      if(req.body.list_id) {
        card.list_id = req.body.list_id;
      }
      if(req.body.position) {
        card.position = req.body.position;
      }
      await card.save();
      res.json(card);
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  },
  async deleteOneCard(req, res) {
    const id = req.params.id;
    try {
      const card = await Card.findByPk(id);
      if(!card) {
        return res.status(404).json({ error: `No card with id ${id}`});
      } else {
        await card.destroy();
        res.sendStatus(204);
      }
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  }
};

module.exports = cardController;