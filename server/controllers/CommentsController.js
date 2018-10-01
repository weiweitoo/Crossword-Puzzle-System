const Comments = require('../models').comments;
var fs = require('fs');

module.exports = {
  create(req, res) {
    return Comments.create({
        content: req.body.contentText,
        commentdate: req.body.commentdate,
        userId: req.body.userId,
        classpostId: req.body.classpostId
    })
    .then(comments => res.status(201).send(comments))
    .catch(error => res.status(400).send(error));
    },
  list(req, res) {
    return Comments
      .all()
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },
 
};

