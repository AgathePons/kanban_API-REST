Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@AgathePons 
AgathePons
/
kanban_API-REST
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
kanban_API-REST
/
README.md
in
master
 

Spaces

2

Soft wrap
1
# kanban_API-REST
2
​
3
First steps with **API REST** concept.
4
​
5
This project is in two parts:
6
​
7
- Back side : **API REST**
8
- Front side : **JS front app** ([repo](https://github.com/AgathePons/kanban_front-app))
9
​
10
The full project is available in the `master` branch, as **monolithic application**.
11
​
12
- Branch `conception` : First step, **conception**. In the `doc` folder :
13
  - User stories
14
  - Sequence diagram for US : card creation
15
  - Routes
16
  - MCD
17
  - MLD
18
  - Data dictionnary
19
  - Tables doc
20
- Branch `setup_sql` : Set up the ORM **Sequelize** and **models**
21
- Branch `setup_api` : Set up the routes for the **CRUD**, handle **CORS**
22
- Branch `master` : Add the front buildt front app in `assets` folder
23
​
24
## How to run
25
​
26
### Run the API
27
​
28
Install dependencies
29
​
30
```cmd
31
npm i
32
```
33
​
34
Create DB (with postgres superuser)
35
​
36
```cmd
37
createdb <dbname>
38
```
39
​
40
Seed DB
41
​
42
```cmd
43
psql -U <user> -d <dbname> -f data/create_tables.sql
44
```
45
​
Aucun fichier choisi
Attach files by dragging & dropping, selecting or pasting them.
@AgathePons
Commit changes
Commit summary
Create README.md
Optional extended description
Add an optional extended description…
 Commit directly to the master branch.
 Create a new branch for this commit and start a pull request. Learn more about pull requests.
 
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
