const Users = require('../models').users;
const Parents = require('../models').parents;
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
    }
};

