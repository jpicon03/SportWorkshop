'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

var deportesController = require('./app/controllers/deportes.ctrl.js');
var deportistasController = require('./app/controllers/deportistas.ctrl.js');

const port = 8000;

app.options('*', cors());
app.use(cors());

app.use('/sports-app/api', [deportesController, deportistasController]);

app.use('/sportsa-app/api/*', function (req, res, next) {
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Sports App back listening on ' + port);
});