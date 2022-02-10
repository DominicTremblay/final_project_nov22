var express = require('express');
var router = express.Router();

module.exports = ({getUsers}) => {

//get /api/users
  router.get('/', (req, res) => {
    getUsers()
      .then((users) => res.json(users))
      .catch((err) => res.json({ error: err.message }));
  });

  return router;
};
