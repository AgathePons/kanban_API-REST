const {
  Tag
} = require('../models');

const tagController = {
  async getAllTags(req, res) {
    try {
      const tagsArray = await Tag.findAll({
        include: 'cardList'
      });
      res.json(tagsArray);
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  },
  async createTag(req, res) {
    try {
      const newTag = new Tag({
        name: req.body.name,
      });
      if(req.body.color) {
        newTag.color = req.body.color;
      }
      await newTag.save();
      res.status(201).json(newTag);
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  },
  async getOneTag(req, res) {
    const id = req.params.id;
    try {
      const tag = await Tag.findByPk(id, {
        include: 'cardList'
      });
      if(!tag) {
        return res.status(404).json({ error: `No tag with id ${id}`});
      }
      res.json(tag);
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  },
  async patchOneTag(req, res) {
    const id = req.params.id;
    try {
      const tag = await Tag.findByPk(id);
      if(!tag) {
        return res.status(404).json({ error: `No tag with id ${id}`});
      }
      if(req.body.name) {
        tag.name = req.body.name;
      }
      if(req.body.color) {
        tag.color = req.body.color;
      }
      await tag.save();
      res.json(tag);
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  },
  async deleteOneTag(req, res) {
    const id = req.params.id;
    try {
      const tag = await Tag.findByPk(id);
      if(!tag) {
        return res.status(404).json({ error: `No tag with id ${id}`});
      } else {
        await tag.destroy();
        res.sendStatus(204);
      }
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  }
};

module.exports = tagController;