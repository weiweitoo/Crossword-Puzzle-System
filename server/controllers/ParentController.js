// const Users = require('../models').user;
const Parents = require('../models').parent;


module.exports = {
  create(req, res) {
    // res.send(req.body);
    // return Users.create({
    //     username: req.body.username,
    //     password: req.body.password,
    //     email: req.body.email,
    //   })
    //   .then(Users => res.status(201).send(Users))
    //   .catch(error => res.status(400).send(error)),
      
    //   Parents
    //   .create()
    //   .then(Parents => res.status(201).send(Parents))
    //   .catch(error => res.status(400).send(error));

  },
  list(req, res) {
    // return Users
    //   .all()
    //   .then(parent => res.status(200).send(parent))
    //   .catch(error => res.status(400).send(error));
  },
};