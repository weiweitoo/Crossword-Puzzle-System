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
                attributes:['id','username','email'],
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

    getId(req, res) {
        Admins.findAll({
            where:{
              userId: req.params.userId
            }
          })
          .then(classes => res.status(201).send(classes))
          .catch(error => res.status(400).send(error));
    },

    getUserId(req, res) {
      Admins.findAll({
          where:{
            id : req.params.adminId
          }
        })
        .then(admins => res.status(200).send(admins[0]))
        .catch(error => res.status(400).send(error));
    },

    getInfo(req, res) {
        Admins.findAll({
            attributes : [['userId','id']],
            where:{
              id : req.params.adminId
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