const {
  List
} = require('../models');

const listController = {
  async getAllLists(req, res) {
    try {
      const listArray = await List.findAll({
        include: [{
          association: 'cards',
          include: [{
              association: 'tags'
            }]
        }]
      });
      res.json(listArray);
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  },
  async createList(req, res) {
    try {
      const newList = new List({
        name: req.body.name
      });
      await newList.save();
      res.status(201).json(newList);
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  },
  async getOneList(req, res) {
    const id = req.params.id;
    try {
      const list = await List.findByPk(id, {
        include: [{
          association: 'cards',
          include: [{
            association: 'tags'
          }]
        }]
      });
      if(!list) {
        return res.status(404).json({ error: `No list with id ${id}`});
      }
      res.json(list);
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  },
  async patchOneList(req, res) {
    const id = req.params.id;
    try {
      const list = await List.findByPk(id);
      if(!list) {
        return res.status(404).json({ error: `No list with id ${id}`});
      }
      if(req.body.name) {
        list.name = req.body.name;
      }
      if(req.body.position) {
        list.position = req.body.position;
      }
      await list.save();
      res.json(list);
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  },
  async deleteOneList(req, res) {
    const id = req.params.id;
    try {
      const list = await List.findByPk(id);
      if(!list) {
        return res.status(404).json({ error: `No list with id ${id}`});
      } else {
        await list.destroy();
        res.sendStatus(204);
      }
    } catch(err) {
      console.log(err);
      res.status(500).json(err.toString());
    }
  }
}

module.exports = listController;