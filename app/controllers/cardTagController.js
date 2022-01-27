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
      // push the tag in the tag array of the card
      console.log('BEFORE ---------------');
      console.log(card.tags);
      //card.tags.push(tag);
      await card.addTag(tag);
      console.log('AFTER ---------------');
      console.log(card.tags);
      /* await card.save({
        include: [Tag]
      }); */
      res.sendStatus(204);
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  },
};

module.exports = cardTagController;