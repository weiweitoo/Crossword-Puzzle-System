const TestController = require('../controllers').TestController;
const ParentController = require('../controllers').ParentController;
const ClassesController = require('../controllers').ClassesController;
const ClassMemberController = require('../controllers').ClassMemberController;
const StudentController = require('../controllers').StudentController;
const TeacherController = require('../controllers').TeacherController;
const AdminController = require('../controllers').AdminController;
const AppointmentsController = require('../controllers').AppointmentsController;
const ClassController = require('../controllers').ClassController;
const ClasspostController = require('../controllers').ClasspostController;
const UserController = require('../controllers').UserController;
const FreeTimeSlotController = require('../controllers').FreeTimeSlotController;

module.exports = (app) => {
  
	app.get('/api/parent', ParentController.list);
	app.post('/api/parent', ParentController.create); 

	app.get('/api/lecturer-list', StudentController.getLecturerList);

	app.get('/api/class/:classId', ClassesController.show);
	app.get('/api/class', ClassesController.list);
	app.post('/api/class', ClassesController.create);

	app.get('/api/classmember/:studentId', ClassMemberController.show);

	app.get('/api/student', StudentController.list);
	app.post('/api/student', StudentController.create); 

	app.get('/api/teacher', TeacherController.list);
	app.post('/api/teacher', TeacherController.create); 

	app.get('/api/admin', AdminController.list);
	app.post('/api/admin', AdminController.create); 

	app.get('/api/freetime/:teacherId', FreeTimeSlotController.show); 

  // app.get('/api/appointment', AppointmentsController.list);
  // app.post('/api/appointment', AppointmentsController.create); 

  app.get('/api/class', ClassController.list);
  app.post('/api/class', ClassController.create); 

  app.get('/api/classpost', ClasspostController.list);
  app.post('/api/classpost', ClasspostController.create); 

  app.get('/api/user', UserController.list);
  app.post('/api/user_login', UserController.login);

};