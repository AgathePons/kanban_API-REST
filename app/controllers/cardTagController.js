const req = require('express/lib/request');
const {
  Tag,
  Card
} = require('../models');

const cardTagController = {
  async asignTagToCard(req, res) {
    const cardId = req.params.id;
    const tagId = req.body.id;
    try {
      // get the card and the tag
      const card = await Card.findByPk(cardId, {
        include: 'tags'
      });
      if(!card) {
        return res.status(404).json({ error: `No card with id ${id}`});
      }
      const tag = await Tag.findByPk(tagId);
      if(!tag) {
        return res.status(404).json({ error: `No tag with id ${id}`});
      }
      // use the special method to instance fooInstance.addBar()
      // https://sequelize.org/master/manual/assocs.html
      await card.addTag(tag);
      await card.reload();
      res.json(card);
      // res.sendStatus(204);
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  },
  async removeTagToCard (req, res) {
    const cardId = req.params.cardId;
    const tagId = req.params.tagId;
    try {
      // get the card and the tag
      const card = await Card.findByPk(cardId, {
        include: 'tags'
      });
      if(!card) {
        return res.status(404).json({ error: `No card with id ${id}`});
      }
      const tag = await Tag.findByPk(tagId);
      if(!tag) {
        return res.status(404).json({ error: `No tag with id ${id}`});
      }
      // use the special method to instance fooInstance.removeBar()
      await card.removeTag(tag);
      await card.reload();
      res.json(card);
      //res.sendStatus(204);
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  }
};

module.exports = cardTagController;