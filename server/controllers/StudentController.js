var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Students = require('../models').students;
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
        // res.status(201).send(questions)
        Questions.findAll({
          where:{
            [Op.or]: questions.map(function(e){
              return e.toJSON();
            })
          }
        })
      })
      .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
  },
  

};