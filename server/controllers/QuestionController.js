const Questions = require('../models').questions;
const Students = require('../models').students;
const Classes = require('../models').classes;
const Classmembers = require('../models').classmembers;
const Results = require('../models').results;
var fs = require('fs');

module.exports = {
  create(req, res) {
    return Questions.create({
        questfilename: req.body.questfilename,
        teacherId: req.body.teacherId,
        classId: req.body.classId,
        subjectId: req.body.subjectId
    })
    .then(questions => res.status(201).send(questions))
    .catch(error => res.status(400).send(error));
    },
  list(req, res) {
    return Questions
      .all()
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },
  list_withId(req, res){
    Questions.findAll({
      where : {
        id : req.params.questId
      }
    })
    .then(questions => res.status(200).send(questions))
    .catch(error => res.status(400).send(error));
  },
  save_file(req, res){
    res.send(req.files);
  },
  get_quest_cls_std_id(req, res){
    Students.findAll({
            attributes : ['userId'],
          where:{
            id : req.params.studentId
          }
        })
        .then(function(students){
          Classmembers.findAll({
            where :{
              userId : students[0].dataValues.userId,
              classId : req.params.classId
            }
          }).then(function(classes){
              Classes.findAll({
                where:{
                  id : classes[0].dataValues.classId
                }
              }).then(function(classes){
                Questions.findAll({
                  where : {
                    classId : classes[0].dataValues.id
                  }
                }).then(questions => res.status(200).send(questions))
                .catch(error => res.status(400).send(error));
              })
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
  },
  get_score_cls_std_id(req, res){
    Students.findAll({
            attributes : ['userId'],
          where:{
            id : req.params.studentId
          }
        })
        .then(function(students){
          Classmembers.findAll({
            where :{
              userId : students[0].dataValues.userId,
              classId : req.params.classId
            }
          }).then(function(classes){
              Classes.findAll({
                where:{
                  id : classes[0].dataValues.classId
                }
              }).then(function(classes){
                Questions.findAll({
                  where : {
                    classId : classes[0].dataValues.id
                  }
                }).then(function(questions){
                  Results.findAll({
                    where:{
                      questId : questions[0].dataValues.id
                    }
                  }).then(results => res.status(200).send(results))
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
  get_quest_clsId(req, res){
    Questions.findAll({
      where:{
        classId : req.params.classId
      }
    })
    .then(questions => res.status(200).send(questions))
    .catch(error => res.status(400).send(error));
  }

};


