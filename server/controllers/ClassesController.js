const Classes = require('../models').classes;
const Users = require('../models').users;

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
  

};