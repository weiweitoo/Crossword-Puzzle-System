const TestController = require('../controllers').TestController;
const ParentController = require('../controllers').ParentController;
const StudentController = require('../controllers').StudentController;
const TeacherController = require('../controllers').TeacherController;
const AdminController = require('../controllers').AdminController;

module.exports = (app) => {
  
  app.get('/api/parent', ParentController.list);
  app.post('/api/parent', ParentController.create); 

  app.get('/api/student', StudentController.list);
  app.post('/api/student', StudentController.create); 

  app.get('/api/teacher', TeacherController.list);
  app.post('/api/teacher', TeacherController.create); 

  app.get('/api/admin', AdminController.list);
  app.post('/api/admin', AdminController.create); 


};