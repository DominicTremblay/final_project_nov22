var express = require('express');
var router = express.Router();

module.exports = ({getPosts}) => {

// get /api/posts
  router.get('/', (req, res) => {
    getPosts()
      .then((users) => res.json(users))
      .catch((err) => res.json({ error: err.message }));
  });

  return router;
};
