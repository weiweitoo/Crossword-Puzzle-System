const TestController = require('../controllers').TestController;
const ParentController = require('../controllers').ParentController;
const StudentController = require('../controllers').StudentController;
const TeacherController = require('../controllers').TeacherController;
const AdminController = require('../controllers').AdminController;
const AppointmentsController = require('../controllers').AppointmentsController;
const ClassController = require('../controllers').ClassController;
const ClasspostController = require('../controllers').ClasspostController;

module.exports = (app) => {
  
  app.get('/api/parent', ParentController.list);
  app.post('/api/parent', ParentController.create); 

  app.get('/api/student', StudentController.list);
  app.post('/api/student', StudentController.create); 

  app.get('/api/teacher', TeacherController.list);
  app.post('/api/teacher', TeacherController.create); 

  app.get('/api/admin', AdminController.list);
  app.post('/api/admin', AdminController.create); 

  // app.get('/api/appointment', AppointmentsController.list);
  // app.post('/api/appointment', AppointmentsController.create); 

  app.get('/api/class', ClassController.list);
  app.post('/api/class', ClassController.create); 

  app.get('/api/classpost', ClasspostController.list);
  app.post('/api/classpost', ClasspostController.create); 


};