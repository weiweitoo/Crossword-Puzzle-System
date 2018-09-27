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

var sequelize = require('sequelize-heroku').connect(require('sequelize'));

if (sequelize) {
    sequelize.authenticate().then( function() {
        var config = sequelize.connectionManager.config;
        console.log('sequelize-heroku: Connected to '+config.host+' as '+config.username+'.');
        
        sequelize.query('SELECT 1+1 as test').then( function(res) {
            console.log('1+1='+res[0][0].test);
        });
        
    }).catch( function(err) {
        var config = sequelize.connectionManager.config;
        console.log('Sequelize: Error connecting '+config.host+' as '+config.user+': '+err);
    });
} else {
    console.log('No environnement variable found.');
}