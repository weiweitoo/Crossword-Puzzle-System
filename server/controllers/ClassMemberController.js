var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const ClassMember = require('../models').classmembers;
const Classes = require('../models').classes;

module.exports = {
	show(req, res) {
	 ClassMember.findAll({
	    attributes: ['id'],
	    where: {userId: req.params.studentId}
	  })
		.then(function(classes){
	    Classes.findAll({
	      where:{
	        [Op.or]: classes.map(function(e){
	        	return e.toJSON();
	        })
	      }
	    })
	    .then(cls => res.status(201).send(cls))
	    .catch(error => res.status(400).send(error));
	  })
		.catch(error => res.status(400).send(error));
},

}