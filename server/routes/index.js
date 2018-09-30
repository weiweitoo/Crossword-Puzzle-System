const TestController = require('../controllers').TestController;
const ParentController = require('../controllers').ParentController;
const ClassesController = require('../controllers').ClassesController;
const ClassMemberController = require('../controllers').ClassMemberController;
const StudentController = require('../controllers').StudentController;

module.exports = (app) => {
  
	app.get('/api/parent', ParentController.list);
	app.post('/api/parent', ParentController.create); 

	app.get('/api/lecturer-list', StudentController.getLecturerList);

	app.get('/api/class/:classId', ClassesController.show);
	app.get('/api/class', ClassesController.list);
	app.post('/api/class', ClassesController.create);

	app.get('/api/classmember/:studentId', ClassMemberController.show);

};