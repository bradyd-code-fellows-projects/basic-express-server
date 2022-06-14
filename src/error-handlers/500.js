'use strict';

/**
 * Description:
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

module.exports = function (err, req, res, next) {
  const error = err.message ? err.message : err;
  res.status(500).send(error);
};
