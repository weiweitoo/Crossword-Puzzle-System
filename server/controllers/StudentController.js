var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Users = require('../models').users;
const Students = require('../models').students;
const Teachers = require('../models').teachers;
const ClassMember = require('../models').classmember;
const Classes = require('../models').classes;
const Questions = require('../models').questions;

module.exports = {
   getLecturerList(req, res) {
    ClassMember.findAll({
      attributes: ['id'],
      where: {userId: 1}
    })
    .then(function(classes){
      // res.status(201).send(classes)
      Classes.findAll({
        attributes: [['id','classId']],
        where:{
          [Op.or]: classes.map(function(e){
            return e.toJSON();
          })
        }
      })
      .then(function(questions){
        Questions.findAll({
          attributes: [['teacherId','id']],
          where:{
            [Op.or]: questions.map(function(e){
              return e.toJSON();
            })
          }
        })
        .then(function(questions){
          Teachers.findAll({
            attributes: [['userId','id']],
            where:{
              [Op.or]: questions.map(function(e){
                return e.toJSON();
              })
            }
          })
          .then(function(teachers){
            // res.status(201).send(teachers)
            Users.findAll({
              where:{
                [Op.or]: teachers.map(function(e){
                  return e.toJSON();
                })
              }
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
  },
  
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
