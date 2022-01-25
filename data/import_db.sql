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
  "position" INTEGER NOT NULL
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
--TODO

COMMIT;