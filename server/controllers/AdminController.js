const Users = require('../models').users;
const Admins = require('../models').admins;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  create(req, res) {

    return Users.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    })
    .then(function(Users){
        // res.status(201).json(Users);
        // res.status(201).json({'hehe' : Users.id});
        Admins.create({
            userId: Users.id
        })
        .then(Admins => res.status(200).send(Admins))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
    },

  list(req, res) {
    return Admins.findAll({
      attributes:[['userId',"id"]]
    })
    .then(function(admins){
        Users.findAll({
            where:{
                [Op.or]: admins.map(function(e){
                return e.toJSON();
            })
            }
        })
        .then(cls => res.status(201).send(cls))
        .catch(error => res.status(400).send(error));
    })
      .catch(error => res.status(400).send(error));
  },
};