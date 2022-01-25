const List = require('./list');
const Card = require('./card');
const Tag = require('./tag');

// List <=> Card
Card.belongsTo(List, {
  as: 'list',
  foreignKey: 'list_id'
});

List.hasMany(Card, {
  as: 'cards',
  foreignKey: 'list_id'
});

// Card <=> Tag
Card.belongsToMany(Tag, {
  as: 'tags',
  through: 'card_has_tag',
  foreignKey: 'card_id',
  otherKey: 'tag_id'
});

Tag.belongsToMany(Card, {
  as: 'cards',
  through: 'card_has_tag',
  foreignKey: 'card_id',
  otherKey: 'tag_id'
});

module.exports = {List, Card, Tag};