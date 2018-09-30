const Users = require('../models').users;

module.exports = {
  list(req, res) {
    return Users.all({
      attributes:['username','email']
    })
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
  user_type(req, res){
   //  Users.findAll({
   //    where: {
   //      username : req.body.username,
   //      password : req.body.password
   //    }
   // }).then(function(users){
   //  if(!users[0]){
   //    res.status(200).send(users.toJSON());
   //  }
   //  else{
   //    res.status(200).send(users.toJSON());
   //  }
   // }).catch(error => res.status(400).send(error));
  }
};