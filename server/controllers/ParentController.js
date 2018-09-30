const Users = require('../models').users;
const Parents = require('../models').parent;

module.exports = {
  create(req, res) {
    return Users
      .create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
      
      // Parents
      // .create()
      // .then(parent => res.status(201).send(parent))
      // .catch(error => res.status(400).send(error));

  },
  list(req, res) {
    return Users
      .all()
      .then(parent => res.status(200).send(parent))
      .catch(error => res.status(400).send(error));
  },
};