BEGIN;

DROP TABLE IF EXISTS -- Drop all tables before create
  "list", 
  "card", 
  "tag", 
  "card_has_tag";

-- Create all tables
CREATE TABLE IF NOT EXISTS "list" (
  "id" serial PRIMARY KEY,
  "name" TEXT NOT NULL,
  "position" INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS "card" (
  "id" serial PRIMARY KEY,
  "name" TEXT NOT NULL,
  "color" TEXT,
  "position" INTEGER NOT NULL,
  "list_id" INTEGER REFERENCES "list"("id") NOT NULL
);

CREATE TABLE IF NOT EXISTS "tag" (
  "id" serial PRIMARY KEY,
  "name" TEXT NOT NULL,
  "color" TEXT
);

CREATE TABLE IF NOT EXISTS "card_has_tag" (
  "id" serial PRIMARY KEY,
  "card_id" INTEGER REFERENCES "card"("id"),
  "tag_id" INTEGER REFERENCES "tag"("id")
);

-- Put some data into the tables
INSERT INTO "list" ("name", "position") VALUES 
('To do', 1),
('Work in progress', 2),
('Done', 3);

INSERT INTO "card" ("name", "color", "position", "list_id") VALUES 
('Faire le MCD','#86FC00', 1, 3),
('Faire le MLD','#00FCF4', 2, 3),
('Faire le diagramme de séquence','#FCF400', 3, 3),
('Créer le role et la db dans psql','#FC7600', 1, 2),
('Ecrire le sql pour importer les tables','#FCF400', 2, 2),
('Ecrire le sql pour importer de la data dans les tables','#86FC00', 3, 2),
('Initier le projet','#FC7600', 1, 1),
('Setup Sequelize','#00FCF4', 2, 1),
('Tester...','#FC7600', 3, 1);

INSERT INTO "tag" ("name", "color") VALUES 
('BDD', '#009C9B'),
('Dev', '#346969'),
('Test', '#15CF65'),
('à valider', '#D54A6B'),
('à retravailler', '#9C0072');

INSERT INTO "card_has_tag" ("card_id", "tag_id") VALUES 
(1, 3),
(2, 3),
(3, 3),
(4, 2),
(5, 2),
(6, 2),
(7, 1),
(8, 1),
(9, 1),
(5, 4),
(6, 4),
(7, 4),
(8, 4),
(9, 5);

COMMIT;