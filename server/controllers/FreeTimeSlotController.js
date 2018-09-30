var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Users = require('../models').users;
const FreeTimeSlots = require('../models').freetimeslots;
const Teachers = require('../models').teachers;

module.exports = {
  show(req, res) {
    return FreeTimeSlots.findAll({
      where:{
        teacherId: req.params.teacherId
      }
    })
    .then(freeTimeSlots => res.status(200).send(freeTimeSlots))
    .catch(error => res.status(400).send(error));
  }
};
