const express = require('express');
const router = require('./router');

const app = express();

//app.get('/', (req, res) => res.status(200).send('Olá Mundo!'));
app.use(router);

module.exports = app;