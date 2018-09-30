const Questions = require('../models').questions;
var fs = require('fs');

module.exports = {
  create(req, res) {
    return Questions.create({
        questfilename: req.body.questfilename,
        teacherId: req.body.teacherId,
        classId: req.body.classId,
        subjectId: req.body.subjectId
    })
    .then(questions => res.status(200).send(questions))
    .catch(error => res.status(400).send(error));
    },
  list(req, res) {
    return Questions
      .all()
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },
  save_file(req, res){
    res.send(req.files);
  },
};


