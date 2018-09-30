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
const CommentsController = require('../controllers').CommentsController;

module.exports = (app) => {
	
	app.get('/api/parent', ParentController.list);
	app.get('/api/userid-parent/:userId', ParentController.getId);
	app.get('/api/parent-userid/:parentId', ParentController.getUserId);
	app.get('/api/parent-info/:parentId', ParentController.getInfo);
	app.get('/api/parent-childreninfo/:parentId', ParentController.getChildrenInfo);
	app.post('/api/parent', ParentController.create); 

	app.get('/api/lecturer-list/:userId', StudentController.getLecturerList);

	app.get('/api/class/:classId', ClassesController.show);
	app.get('/api/class', ClassesController.list);
	app.post('/api/class', ClassesController.create);
	app.get('/api/classpost/:classId', ClassesController.getPostById);
	app.get('/api/reaction/:classpostId', ClassesController.getReactionById);
	app.get('/api/comment/:classpostId', ClassesController.getCommentById);

	app.post('/api/classmember', ClassMemberController.create);
	app.get('/api/classmember/:studentId', ClassMemberController.show);

	app.get('/api/student', StudentController.list);
	app.get('/api/student/:userId', StudentController.getId);
	app.get('/api/student-info/:studentId', StudentController.getInfo);
	app.get('/api/student-userid/:studentId', StudentController.getUserId);
	app.post('/api/student', StudentController.create);

	app.get('/api/teacher', TeacherController.list);
	app.get('/api/teacher/:userId', TeacherController.getId);
	app.get('/api/teacher-info/:teacherId', TeacherController.getInfo);
	app.get('/api/teacher-userid/:teacherId', TeacherController.getUserId);
	app.post('/api/teacher', TeacherController.create);

	app.get('/api/admin', AdminController.list);
	app.get('/api/admin/:userId', AdminController.getId);
	app.get('/api/admin-info/:adminId', AdminController.getInfo);
	app.get('/api/admin-userid/:adminId', AdminController.getUserId);
	app.post('/api/admin', AdminController.create);

	app.get('/api/freetime/:teacherId', FreeTimeSlotController.show);

	app.get('/api/appointment', AppointmentsController.list);
	app.get('/api/available-appointment/:teacherId', AppointmentsController.getAvailableSlot);
	app.post('/api/appointment', AppointmentsController.create);
	app.post('/api/book-appointment', AppointmentsController.bookSlot);

	app.get('/api/classpost', ClasspostController.list);
	app.post('/api/classpost', ClasspostController.create); 

	app.get('/api/comments', CommentsController.list);
	app.post('/api/comments', CommentsController.create);

	app.get('/api/user', UserController.list);
	app.post('/api/user_login', UserController.login);
	app.get('/api/user-type/:userId', UserController.userType);

	app.get('/api/question', QuestionController.list);
	app.get('/api/question/:questId', QuestionController.list_withId);
	app.post('/api/question', QuestionController.create);
	app.post('/api/savequestion', QuestionController.save_file);
	app.get('/api/question/:studentId/:classId', QuestionController.get_quest_cls_std_id);
	app.get('/api/question_score/:studentId/:classId', QuestionController.get_score_cls_std_id);
	app.get('/api/question/:classId', QuestionController.get_quest_clsId);
	

	app.get('/api/results', ResultsController.list);
	app.post('/api/results', ResultsController.create);
	app.get('/api/avg_results/:questId', ResultsController.avg_results);


	app.post('/csv', function (req, res) {
	  fs.writeFile("./public/uploadQuestion/dede.csv", req.body.csv, function(err) {
	      if(err) {
	          return console.log(err);
	      }
	      res.send({"status":"The file was saved!"})
	  }); 
	})

};