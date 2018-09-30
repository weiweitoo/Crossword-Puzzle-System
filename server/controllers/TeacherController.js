const Users = require('../models').users;
const Teachers = require('../models').teacher;
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
        Teachers.create({
            userId: Users.id
        })
        .then(Teachers => res.status(200).send(Teachers))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
    },

  list(req, res) {
    return Teachers.findAll({attributes:[['userId',"id"]]}).then(function(teachers){
        Users.findAll({
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
};