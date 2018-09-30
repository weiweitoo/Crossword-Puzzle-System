const Classes = require('../models').classes;

module.exports = {
  create(req, res) {
    // res.send(req.body);
    return Classes.create({
        classname: req.body.classname
      })
      .then(Classes => res.status(201).send(Classes))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Classes
      .all()
      .then(classes => res.status(200).send(classes))
      .catch(error => res.status(400).send(error));
  },
};