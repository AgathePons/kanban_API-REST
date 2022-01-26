const {
  Tag
} = require('../models');

const tagController = {
  async getAllTags(req, res) {
    const tagsArray = await Tag.findAll({
      include: 'cardList'
    });
    res.json(tagsArray);
  },
  async createTag(req, res) {
    const newTag = new Tag({
      name: req.body.name,
      color: req.body.color
    });
    await newTag.save();
    res.status(201).json(newTag);
  },
  async getOneTag(req, res) {
    const id = req.params.id;
    const tag = await Tag.findByPk(id, {
      include: 'cardList'
    });
    res.json(tag);
  },
  async patchOneTag(req, res) {
    const id = req.params.id;
    const tag = await Tag.findByPk(id);
    tag.name = req.body.name;
    tag.color = req.body.color;
    await tag.save();
    res.json(tag); //! status ?
  },
  async deleteOneTag(req, res) {
    const id = req.params.id;
    const tag = await Tag.findByPk(id);
    await tag.destroy();
    res.sendStatus(204);
  }
};

module.exports = tagController;