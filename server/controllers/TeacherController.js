const Users = require('../models').users;
const Teachers = require('../models').teachers;
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
        Teachers.create({
            userId: Users.id
        })
        .then(Teachers => res.status(200).send(Teachers))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Teachers.findAll({attributes:[['id','userId',"id"]]}).then(function(teachers){
            Users.findAll({
                attributes:['username','email'],
                where:{
                    [Op.or]: teachers.map(function(e){
                    return e.toJSON();
                })
                }
            })
            .then(cls => res.status(201).send(cls))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },

    getId(req, res) {
      Teachers.findAll({
          where:{
            userId: req.params.userId
          }
        })
        .then(teachers => res.status(201).send(teachers))
        .catch(error => res.status(400).send(error));
    }
};