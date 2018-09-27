// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(module.filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(`${__dirname}/../config/config.json`)[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable]);

// } else {
//   sequelize = new Sequelize(
//     config.database, config.username, config.password, config
//   );
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file =>
//     (file.indexOf('.') !== 0) &&
//     (file !== basename) &&
//     (file.slice(-3) === '.js'))
//   .forEach(file => {
//     const model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

// var pg = require('pg');
// app.get('/db', function(request, response){
//   pg.connect(process.env.DATABASE_URL, function(err, client, done){
//     client.query('SELECT * FROM test_table', function(err, result){
//       done();
//       if(err){
//         console.error(err); response.send("Error " + err);
//       }
//       else{
//         response.render('pages/db', { results: result.rows});
//       }
//     });
//   });
// });
if (!global.hasOwnProperty("models")) {
  var Sequelize = require("sequelize"),
    sequelize = null;
if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
    // the application is executed on Heroku ... use the postgres         database
sequelize =new Sequelize(process.env.HEROKU_POSTGRESQL_BLACK_URL,
 {
   dialect: "postgres",
   protocol: "postgres",
   port: 5432,
   host: "<heroku host>",
   logging: true //false
});
} else {
// the application is executed on the local machine ... use mysql
  sequelize =new Sequelize("postgres://<username>:<password>@<host>:  <port>/<database>",
  {
  dialect: "postgres"
  }
 );
}
global.models = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  User: sequelize.import(__dirname + "/user"),
// add your other models here
  };
}
module.exports = global.models;

//postgres://xmqqlrjqeimxyq:658e0c7f61abd31631daeb7d6989a2f564c563f6e3e50208111ee065b4cf291b@ec2-174-129-18-98.compute-1.amazonaws.com:5432/d63l5bsbtt338e