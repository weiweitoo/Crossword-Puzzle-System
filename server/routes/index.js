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
const QuestionController = require('../controllers').QuestionController;
var multer = require('multer');

module.exports = (app) => {
  
	app.get('/api/parent', ParentController.list);
	app.get('/api/parent/:userId', ParentController.getId);
	app.post('/api/parent', ParentController.create); 


	app.get('/api/lecturer-list/:userId', StudentController.getLecturerList);

	app.get('/api/class/:classId', ClassesController.show);
	app.get('/api/class', ClassesController.list);
	app.post('/api/class', ClassesController.create);

	app.post('/api/classmember', ClassMemberController.create);
	app.get('/api/classmember/:studentId', ClassMemberController.show);

	app.get('/api/student', StudentController.list);
	app.get('/api/student/:userId', StudentController.getId);
	app.post('/api/student', StudentController.create); 

	app.get('/api/teacher', TeacherController.list);
	app.get('/api/teacher/:userId', TeacherController.getId);
	app.post('/api/teacher', TeacherController.create); 

	app.get('/api/admin', AdminController.list);
	app.get('/api/admin/:userId', AdminController.getId);
	app.post('/api/admin', AdminController.create); 

	app.get('/api/freetime/:teacherId', FreeTimeSlotController.show); 

  // app.get('/api/appointment', AppointmentsController.list);
  // app.post('/api/appointment', AppointmentsController.create); 


	app.get('/api/classpost', ClasspostController.list);
	app.post('/api/classpost', ClasspostController.create); 

	app.get('/api/user', UserController.list);
	app.post('/api/user_login', UserController.login);
  app.get('/api/user-type/:userId', UserController.userType);

	app.get('/api/question', QuestionController.list);
	app.post('/api/question', QuestionController.create);
	app.post('/api/savequestion', QuestionController.save_file);

	var storage = multer.diskStorage({
	    destination: (req, file, cb) => {
	      cb(null, 'public/images/uploads')
	    },
	    filename: (req, file, cb) => {
	      cb(null, file.fieldname + '-' + Date.now())
	    }
	});
	var upload = multer({storage: storage})

	app.post('/api/upload', upload.single('avatar'), (req, res) => {
		// return res.send({'123':req.body.file});
	  if (!req.body.file) {
	    console.log("No file received");
	    return res.send({
	      success: false
	    });
	  } else {
	    console.log('file received');
	    return res.send({
	      success: true
	    })
	  }
	});


};