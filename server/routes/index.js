const TestController = require('../controllers').TestController;
const ParentController = require('../controllers').ParentController;
<<<<<<< HEAD
const ClassesController = require('../controllers').ClassesController;
const ClassMemberController = require('../controllers').ClassMemberController;
const StudentController = require('../controllers').StudentController;
=======
const StudentController = require('../controllers').StudentController;
const TeacherController = require('../controllers').TeacherController;
const AdminController = require('../controllers').AdminController;
>>>>>>> 5c6a269b77e032442b9030d71a8b9cd7ea74b8db

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


};