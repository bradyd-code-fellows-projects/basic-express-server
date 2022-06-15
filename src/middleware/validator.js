'use strict';

function validateQuery(req, res, next) {
  let { name } = req.query;
  if (!name) {
    next('Please enter a valid query parameter, like this: /person?name=John');
  } else {
    console.log('name: ', name);
  }
  next();
}

module.exports = validateQuery;
