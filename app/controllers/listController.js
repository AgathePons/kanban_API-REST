const {
  List
} = require('../models');

const listController = {
  async getAllLists(req, res) {
    const listArray = await List.findAll({
      include: [{
        // dans une liste je veux les cards
        association: 'cards',
        include: [
          // et dans ces cards, je veux les tags
          {
            association: 'tags'
          }
        ]
      }]
    });
    // je renvoie ma data en JSON
    res.json(listArray);
  },
  async createList(req, res) {
    // pour créer une liste, j'ai juste besoin de lui donner un name.
    const newList = new List({
      name: req.body.name
    });
    await newList.save();
    // je renvoie l'instance agrémentée de son id
    // je renvoie une 201 qui veut dire CREATED (cf wikipedia https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP)
    res.status(201).json(newList);
  },
  async getOneList(req, res) {
    const id = req.params.id;
    const list = await List.findByPk(id, {
      include: [{
        association: 'cards',
        include: [{
          association: 'tags'
        }]
      }]
    });
    res.json(list);
  },
  async patchOneList(req, res) {
    const id = req.params.id;
    const list = await List.findByPk(id);
    list.name = req.body.name;
    list.position = req.body.position;
    await list.save();
    res.json(list); //! status ?
  },
  async deleteOneList(req, res) {
    const id = req.params.id;
    const list = await List.findByPk(id);
    await list.destroy();
    res.sendStatus(204);
  }
}

module.exports = listController;