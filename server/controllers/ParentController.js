const Users = require('../models').users;
const Parents = require('../models').parents;
const Sequelize = require('Sequelize');
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
        Parents.create({
            userId: Users.id
        })
        .then(Parents => res.status(200).send(Parents))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Parents.findAll({attributes:[['userId',"id"]]}).then(function(parents){
        Users.findAll({
            where:{
                [Op.or]: parents.map(function(e){
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

