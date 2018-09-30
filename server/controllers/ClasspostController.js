const Classposts = require('../models').classposts;

module.exports = {
  create(req, res) {
    // res.send(req.body);
    return Classposts.create({
        posttitle: req.body.posttitle,
        postdescription: req.body.postdescription,
        postdate: req.body.postdate,
        userId: req.body.userId,
        classId: req.body.classId
      })
      .then(Classposts => res.status(201).send(Classposts))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Classposts
      .all()
      .then(classposts => res.status(200).send(classposts))
      .catch(error => res.status(400).send(error));
  },
};