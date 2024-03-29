'use strict'
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

//Carrega as rotas:
const indexRoute = require('./routes/index.js');
const productRoute = require('./routes/product.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;