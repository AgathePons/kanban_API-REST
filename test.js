require('dotenv').config();
const {
  List,
  Card,
  Tag
} = require('./app/models');

const allCardsWithTag = async () => {
  const allCards = await Card.findAll({
    include: 'tags'
  });
  console.log('------------------------');
  const cards = [];
  for(const card of allCards) {
    let tagList = '';
    for(const tag of card.tags) {
      tagList += ' -' + tag.name;
    }
    cards.push(`La carte ${card.name} a le(s) tag(s): ${tagList}`);
  }
  console.table(cards);
};

const cardDetails = async (id) => {
  const card = await Card.findByPk(id, {
    include: ['list', 'tags']
  });
  console.log('------------------------');
  console.log(`La carte "${card.name}" est dans la liste "${card.list.name}", elle a ${card.tags.length} tag(s) et a le code couleur ${card.color}`);
};

const allTags = async () => {
  const tags = await Tag.findAll();
  console.log('------------------------');
  console.log(`Il existe ${tags.length} tags:`);
  for(const tag of tags) {
    console.log(tag.name);
  }
};

const listDetails = async (id) => {
  const list = await List.findByPk(id, {
    include: 'cards'
  });
  console.log('------------------------');
  console.log(`La liste "${list.name}" contient ${list.cards.length} cartes:`);
  for(const card of list.cards) {
    console.log(card.name);
  }
};

const test = async () => {
  await allCardsWithTag();
  await cardDetails(7);
  await allTags();
  await listDetails(2);
};
test();