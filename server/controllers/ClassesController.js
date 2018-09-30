const Classes = require('../models').classes;
const Users = require('../models').users;
const Classposts = require('../models').classposts;

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
  get_post(req, res){
    return Classes.findAll({attributes:[['classId',"id"]]}).then(function(classes){
            Classposts.findAll({
                attributes:['posttitle','postdescription','postdate'],
                where:{
                    [Op.or]: classes.map(function(e){
                    return e.toJSON();
                })
                }
            })
            .then(cls => res.status(200).send(cls))
            .catch(error => res.status(400).send(error));
        })
          .catch(error => res.status(400).send(error));
  }

  

};