const TestController = require('../controllers').TestController;
const ParentController = require('../controllers').ParentController;

module.exports = (app) => {
  
  app.get('/api/parent', ParentController.list);
  app.post('/api/parent', ParentController.create); 

};