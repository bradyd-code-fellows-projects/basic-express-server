'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const logger = require('./middleware/logger');
const validateQuery = require('./middleware/validator');
const greetPerson = require('./modules/person');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');


const PORT = process.env.PORT || 3002;

app.use(logger);

app.get('/', (req, res) => {
  res.status(200).send('This is the server for Brady\'s Code 401-Lab02');
});

app.get('/person', validateQuery, greetPerson);

app.use('*', notFound);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = {
  app,
  start,
};
