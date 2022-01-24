# Modèle de données

## MCD

**Via Mocodo**

```
POSSEDE, 0N LISTE, 11 CARTE: position dans la liste
LISTE: code_liste, nom, position

CARTE: code_carte, titre, couleur
DEFINIT, 0N CARTE, 0N LABEL
LABEL: code_label, nom, couleur
```
![MCD](okanban_mcd.svg)

## MLD

**/!\ ou et comment faire apparaître la position dans la liste ?**

- Liste (<ins>id</ins>, nom)
- Carte (<ins>id</ins>, nom, couleur)
- Label (<ins>id</ins>, nom, couleur)
- Carte HAS Label (<ins>id</ins>, #carte(id), #label(id))
  
**/!\ Est-ce que l'on doit faire intervenir une table d'association entre liste et carte ?**

- Liste HAS Carte (<ins>id</ins>, position, #liste(id), #carte(id))