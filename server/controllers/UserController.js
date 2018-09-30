const Users = require('../models').users;

module.exports = {
  list(req, res) {
    return Users
      .all()
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },
  login(req, res){
    if(req)
  }
};