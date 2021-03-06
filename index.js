require('dotenv').config();

const express = require('express');
const setHeaders = require('./app/middlewares/setHeaders');
const router = require('./app/router');
const multer = require('multer');
const bodyParser = multer();

const port = process.env.PORT || 3000;

const app = express();

app.use(setHeaders.setUrl, setHeaders.setMethods, setHeaders.setHeaders, setHeaders.setCokkies);

// la petite ligne pour réussir a ouvrir un POST
app.use(express.urlencoded({extended: true}));

app.use(bodyParser.none());

app.use(express.static('./assets'));

app.use(router);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});