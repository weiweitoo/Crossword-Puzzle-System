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
        .then(Teachers => res.status(201).send(Teachers))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Teachers.findAll({attributes:[['userId',"id"]]}).then(function(teachers){
            Users.findAll({
                attributes:['id','username','email'],
                where:{
                    [Op.or]: teachers.map(function(e){
                    return e.toJSON();
                })
                }
            })
            .then(cls => res.status(200).send(cls))
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
        .then(teachers => res.status(200).send(teachers))
        .catch(error => res.status(400).send(error));
    },

    getUserId(req, res) {
      Teachers.findAll({
          where:{
            id : req.params.teacherId
          }
        })
        .then(teachers => res.status(200).send(teachers[0]))
        .catch(error => res.status(400).send(error));
    },

    getInfo(req, res) {
        Teachers.findAll({
            attributes : [['userId','id']],
            where:{
              id : req.params.teacherId
            }
          })
          .then(function(parents){
              Users.findAll({
                  where:{
                      [Op.or]: parents.map(function(e){
                          return e.toJSON();
                      })
                  }
                })
                .then(users => res.status(200).send(users[0]))
                .catch(error => res.status(400).send(error));      
          })
          .catch(error => res.status(400).send(error));
      },
};