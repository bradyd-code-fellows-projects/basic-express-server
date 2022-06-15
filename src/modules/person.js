'use strict';

module.exports = {
  greetPerson: (req, res, next) => {
    let { name } = req.params;
    let nameObj = {
      name: name,
    };
    res.status(200).json(nameObj);
  },
};
