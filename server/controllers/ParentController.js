const Users = require('../models').users;
const Parents = require('../models').parents;
const Students = require('../models').students;
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
        Parents.create({
            userId: Users.id,
            childrenId: req.body.childrenId
        })
        .then(Parents => res.status(201).send(Parents))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
  },
    list(req, res) {
        // TODO join with parent to get children id
        return Parents.findAll({attributes:[['userId',"id"]]}).then(function(parents){
            Users.findAll({
                attributes:['id','username','email'],
                where:{
                    [Op.or]: parents.map(function(e){
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
      Parents.findAll({
          where:{
            userId: req.params.userId
          }
        })
        .then(parents => res.status(200).send(parents))
        .catch(error => res.status(400).send(error));
    },
    getUserId(req, res) {
      Parents.findAll({
          where:{
            id : req.params.parentId
          }
        })
        .then(parents => res.status(200).send(parents[0]))
        .catch(error => res.status(400).send(error));
    },
    getInfo(req, res) {
      Parents.findAll({
          attributes : [['userId','id']],
          where:{
            id : req.params.parentId
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
    getChildrenInfo(req, res){
        Parents.findAll({
            attributes : ['childrenId'],
          where:{
            id : req.params.parentId
          }
        })
        .then(function(parents){
            Students.findAll({
                where : { id : parents[0].dataValues.childrenId }
            })
            .then(function(students){
                Users.findAll({
                    where : {id : students[0].dataValues.userId}
                })
                .then(users => res.status(200).send(users))
                .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    }   
};

