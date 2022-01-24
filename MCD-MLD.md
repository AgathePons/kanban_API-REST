# Modèle de données

## MCD

**Via Mocodo**

```
LISTE: code_liste, nom

POSSEDE, 0N LISTE, 11 CARTE: position dans la liste

CARTE: code_carte, titre
DECORE, 01 CARTE, 0N COULEUR
COULEUR: code_couleur, nom

DEFINIT, 0N CARTE, 0N LABEL

LABEL: code_label, nom
```

![MCD](okanban_mcd.svg)