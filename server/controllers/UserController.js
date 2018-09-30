const Users = require('../models').users;
const Parents = require('../models').parents;
const Students = require('../models').students;
const Teachers = require('../models').teachers;
const Admins = require('../models').admins;

module.exports = {
  list(req, res) {
    return Users
      .all()
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },
  login(req, res){
   Users.findAll({
      where: {
        username : req.body.username,
        password : req.body.password
      }
   }).then(function(users){
    if(!users[0]){
      res.status(200).send("invalid account");
    }
    else{
      res.status(200).send("you are in");
    }
   }).catch(error => res.status(400).send(error));
  },

  
  userType(req, res){
    // res.send({"de": isParent(req.params.userId)})

    Parents.findAll({
      where:{
        userId: req.params.userId
      }
    })
    .then(function(parents){
      if(parents.length != 0) res.send({"userType":"parent"});
      else{
        Admins.findAll({
          where:{
            userId: req.params.userId
          }
        })
        .then(function(admin){
          if(admin.length != 0) res.send({"userType":"admin"});
          else{
            Teachers.findAll({
              where:{
                userId: req.params.userId
              }
            })
            .then(function(teacher){
              if(teacher.length != 0) res.send({"userType":"teacher"});
              else{
                Students.findAll({
                  where:{
                    userId: req.params.userId
                  }
                })
                .then(function(student){
                  if(student.length != 0) res.send({"userType":"student"});
                  else{
                    res.send({"userType":"Error. But dont want to tell you what error"})
                  }
                })
                .catch(error => res.status(400).send(error));
              }
            })
            .catch(error => res.status(400).send(error));
          }
        })
        .catch(error => res.status(400).send(error));
      }
    })
    .catch(error => res.status(400).send(error));

    // if(isParent(req.params.userId)){
    //   res.send({"userType":"parent"});
    // }else if(isStudent(req.params.userId)){
    //   res.send({"userType":"student"});
    // }else if(isAdmin(req.params.userId)){
    //   res.send({"userType":"admin"});
    // }else if(isTeacher(req.params.userId)){
    //   res.send({"userType":"teacher"});
    // }
  }
};