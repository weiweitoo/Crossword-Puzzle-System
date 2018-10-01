const Classes = require('../models').classes;
const Users = require('../models').users;
const Classposts = require('../models').classposts;
const Reactions = require('../models').reactions;
const Comments = require('../models').comments;

module.exports = {
  create(req, res) {
    return Classes.create({
        classname: req.body.className,
        teacherId: req.body.teacherId
      })
      .then(classes => res.status(201).send(classes))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
  	Classes
      .all()
    	.then(classes => res.status(200).send(classes))
    	.catch(error => res.status(400).send(error));
  },
  show(req, res) {
    Classes.findAll({
        where:{
          id: req.params.classId
        }
      })
      .then(classes => res.status(200).send(classes))
      .catch(error => res.status(400).send(error));
  },
  getPostById(req, res){
    return Classes.findAll({attributes:[['id',"classId"]]}).then(function(classes){
            Classposts.findAll({
                where:{
                    classId: req.params.classId
                }
            })
            .then(cls => res.status(200).send(cls))
            .catch(error => res.status(400).send(error));
        })
          .catch(error => res.status(400).send(error));
  },
  getReactionById(req, res){
    return Classposts.findAll({attributes:[['id',"classpostId"]]}).then(function(classposts){
            Reactions.findAll({
                where:{
                    classId: req.params.classpostId
                }
            })
            .then(cls => res.status(200).send(cls))
            .catch(error => res.status(400).send(error));
        })
          .catch(error => res.status(400).send(error));
  },
  getCommentById(req, res){
    return Classposts.findAll({attributes:[['id',"classpostId"]]}).then(function(classposts){
            Comments.findAll({
                where:{
                    classId: req.params.classpostId
                }
            })
            .then(cls => res.status(200).send(cls))
            .catch(error => res.status(400).send(error));
        })
          .catch(error => res.status(400).send(error));
  },

  

};