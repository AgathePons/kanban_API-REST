# Les tables

## MLD

- list (<ins>id</ins>, name, position)
- card (<ins>id</ins>, name, color, position)
- tag (<ins>id</ins>, name, color)
- card HAS tag (<ins>id</ins>, #card(id), #tag(id))

## Les types

- **list**
  - id : `SERIAL`
  - name : `TEXT`
  - position : `INTEGER`

- **card**
  - id : `SERIAL`
  - name : `TEXT`
  - color: `TEXT`
  - position : `INTEGER`

- **tag**
  - id : `SERIAL`
  - name : `TEXT`
  - color: `TEXT`

- **card_HAS_tag**
  - id : `SERIAL`
  - card_id : `INTEGER`
  - tag_id: `INTEGER`