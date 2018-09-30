const Users = require('../models').users;
const Students = require('../models').student;
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
        Students.create({
            userId: Users.id
        })
        .then(Students => res.status(200).send(Students))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
    },

  list(req, res) {
    return Students.findAll({attributes:[['userId',"id"]]}).then(function(student){
        Users.findAll({
            where:{
                [Op.or]: student.map(function(e){
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