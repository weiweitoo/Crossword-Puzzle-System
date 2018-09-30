const Results = require('../models').results;
const sequelize = require('sequelize');
var fs = require('fs');

module.exports = {
  create(req, res) {
    return Results.create({
        score: req.body.score,
        timespent: req.body.timespent,
        questId: req.body.questId,
        studentId: req.body.studentId
    })
    .then(results => res.status(201).send(results))
    .catch(error => res.status(400).send(error));
    },
  list(req, res) {
    return Results
      .all()
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },
  avg_results(req, res){
    Results.findAll({
        attributes: ['score'],
        where:{questId:req.params.questId}
    })
    .then(results => res.status(200).send(results))
    .catch(error => res.status(400).send(error));
  }
 
};
