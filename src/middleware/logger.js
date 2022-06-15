'use strict';

module.exports = {
  logger: (req, res, next) => {
    console.log(`REQUEST: ${req.method}, ${req.originalUrl}`);
    next();
  },
};

